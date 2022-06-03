var com = {};

com = {
  /**
   * @name        : getDomFromID
   * @description : qeurySelector 활용 함수
   * @paramtype   : obj {
   *                      selectorType  : ''[d](단건 조회), All(전체 조회),
   *                      ele           : document[d](문서전체), HTMLElement(조회할 Ele)
   *                      searchType    : id[d], class, text,
   *                      query         : serachText
   *                    }
   **/
	searchDom : function(obj){
    if(com.isNull(obj)){
      console.error()
      return;
    }
    //useObj 구성
    useObj ={
      selectorType  : '',      
      ele           : document, 
      searchType    : 'id',       
      query         : '',         
    };
    //useObj
    if(!com.isNull(obj.selectorType)){
      useObj.selectorType = obj.selectorType;
    }
    if(!com.isNull(obj.ele)){
      useObj.ele = obj.ele;
    }
    if(!com.isNull(obj.searchType)){
      useObj.searchType = obj.searchType;
    }
    //searchType구분 query생성
    var query = '';
    if(useObj.searchType == 'id'){
      query = '#'+ useObj.query;
    }else 
    if(useObj.searchType == 'class'){
      query = '.'+ useObj.query;
    }else 
    if(useObj.searchType == 'text'){
      query = useObj.query;
    }
    return useObj.ele['querySelector' + useObj.selectorType](query);
  },
  /**
   * @NAME        : isNull
   * @description : 값의 null cehck
   * @param {*} v
   */
  isNull : function(v){
      return (v === undefined || v === null || v === '')  ? true : false;
  },
  /**
   *  @name 				: getMessage
   *	@description 	: 공통 msg 등록된 문구 가져오기
   *	@param 				: msgCode, 보간
   */
  getMessage : function(msgCode){
    if(com.isNull(msgCode)){
      var retunText = com.getMessage('COM_ALT_0001', "변수가");
      console.error(retunText);
      return null;
    }
    var msgCont = msg[msgCode];
    if(com.isNull(msgCont)){
      var retunText = com.getMessage('COM_ALT_0001', "등록된 메시지가");
      console.error(retunText);
      return false;
    }
    if(arguments.length == 1){
      return msgCont;
    }else{
      for(var i = 1 ; i < arguments.length; i++){
        msgCont = msgCont.replaceAll('{' + (i-1) + '}', arguments[i]);
      }
    }
    return msgCont;
  },
}