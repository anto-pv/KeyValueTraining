import express from "express";
import RequestWithUser from "../util/rest/request";
import jsonwebtoken from "jsonwebtoken";
import APP_CONSTANTS from "../constants";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedExpception";

const authorize = (user: string) => {
 return async (
   req: RequestWithUser,
   res: express.Response,
   next: express.NextFunction
 ) => {
   try {
     const token = getTokenFromRequestHeader(req);
     jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
     const jwtk=jsonwebtoken.decode(token)
     const payloadstringify=JSON.stringify(jwtk);
     const payload=JSON.parse(payloadstringify)
     //console.log(payload.customrole)
     if(payload.customrole === user)
      return next();
    else
      return next(new UserNotAuthorizedException());
   } catch (error) {
     return next(new UserNotAuthorizedException());
   }
 };
};

const getTokenFromRequestHeader = (req: RequestWithUser) => {
    const tokenWithBearerHeader = req.header(
      `${APP_CONSTANTS.authorizationHeader}`
    );    
    if (tokenWithBearerHeader) {
      return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, "");
    }
    return "";
   };
   
export default authorize;