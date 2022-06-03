var com = {};

com = {
  /**
   * @name        : getDomFromID
   * @description : qeurySelector 활용 함수
   * @paramtype   : query(String), 
   *                selectType(null, all), 
   *                ele(null(document), HTMLElement)
   **/
	searchDom : function(query, selectType, ele){
    // valid 체크
    if(com.isNull(query)){  
      console.error(com.getMessage('COM_ALT_0001', '쿼리가'))
      return;
    }
    //selectType Check
    selectType = com.isNull(selectType) ? '' || 'All';

    //ele Check
    ele = com.isNull(ele) ? document || ele
    
    return ele['querySelector' + selectType](query);
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