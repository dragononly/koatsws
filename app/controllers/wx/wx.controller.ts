import {
    BadRequestError,
    Post,
    JsonController,
    BodyParam,
    Get,
    Ctx,
    Req,
    QueryParams,
    Param,
    Body
} from 'routing-controllers'
import { LiveService } from '../../services'
import { decService } from '../../services/tools/dec.service'
import { Service } from 'typedi'
import { Md5 } from 'ts-md5/dist/md5';
const md5 = new Md5();

import {
	WeChat,
    ApiConfigKit,
    QyApiConfigKit,
    AccessToken,
    QyAccessTokenApi,
    Kits,
    HttpKit,
    ApiConfig,
    AccessTokenApi,
    SnsAccessTokenApi,
    ScopeEnum,
    Lang
} from 'tnwx';
let devApiConfig = new ApiConfig('wx73325e554f56eb05', 'f778ae0798e0f8e98e5ac76fe00e33b0','tokenany');

  // 微信公众号、微信小程序、微信小游戏 支持多应用
  ApiConfigKit.putApiConfig(devApiConfig);
  // 开启开发模式,方便调试
  ApiConfigKit.devMode = true;
  // 设置当前应用
  ApiConfigKit.setCurrentAppId(devApiConfig.getAppId);
@JsonController()
@Service()
export class WxController {
    constructor(private catsService: LiveService, private decService: decService) { }
    @Get('wx/auth')
        async autoget(@QueryParams() data: any) {
            let code = data.code;
            let state =data.state;
            console.log("code:", code, " state:", state);
            // code: 031D7XFa1z9Z2C0YlAJa1Jcnze2D7XFi  state: STATE
            // getApiConfigByAppId appId: wx73325e554f56eb05
            // getApiConfigByAppId appId: wx73325e554f56eb05
            
        let cabdata=await  SnsAccessTokenApi.getSnsAccessToken(code)
        console.log('cabdata'+cabdata);
        let temp = JSON.parse(cabdata.toString());
       
        
          // 判断 access_token 是否获取成功
        // if (temp.errcode) {
        //       // access_token 获取失败
        //       console.log(1+temp);
              
        //       return { data: temp};
        //  }
        //  let access_token = temp.access_token;
        //  let openid = temp.openid;
        //  let scope = temp.scope;
        //  if (scope == ScopeEnum.SNSAPI_USERINFO) {
        //             // 获取用户信息
        //          let cab= await  SnsAccessTokenApi.getUserInfo(access_token, openid, Lang.ZH_CN)
        //          console.log(2+cab);
        //          return { data: cab};
        //         } else {
        //             console.log(3+temp);
        //          return { data: temp};
        // }

  
    }
}