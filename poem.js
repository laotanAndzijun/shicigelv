
var i=0;
var j=0;
var q=0;
var allScores=0;
//nextEvent的变量
var randomCount=51;
var allQArr=[];
var ranNum=[];
var random=null;

var myPoem={
	allQ:[
	    {question:"古代汉语有四个声调，除什么声以外，其余都是仄声：", choices:["平声","上声","去声","入声"], correntA: "平声"}, 
		{question:"凡韵尾是以下哪组的字，不会是入声字: ", choices:["e或ue","n或ng","i或ue","o或e"], correntA: "n或ng"},
		
		{question:"下面哪组是平仄两读而意义不变的字？: ", choices:["看、忘","没、发","骑、便","漫、重"], correntA: "看、忘"},
		
		{question:"下面哪个字不是入声字：", choices:["音","月","荫","忽"], correntA: "音"},
		
		{question:"俱，在平水韵里属于哪个声部：", choices:["去声","平声","入声","仄声"], correntA: "平声"},
		
		{question:"“低头思故乡”的“思”与“海天愁思正茫茫”中的“思”，下面哪组声调是正确的：", choices:["平仄","仄平","平平","仄仄"], correntA: "平仄"},
		
		{question:"律绝中的平起首句入韵或仄起首句入韵中的“起”主要看第几个字：", choices:["第一个字","第二个字","第三个字","最后一个字"], correntA: "第二个字"},
		
		{question:"以下格律上不允许的是：", choices:["三仄尾","孤仄","三平尾","邻韵通押"], correntA: "三平尾"},
		
		{question:"江碧鸟逾白，山青花欲燃。今春看又过，何日是归年？这首绝句韵脚用的是平水韵哪个韵部：", choices:["十三元","十四寒","一先","十五删"], correntA: "一先"},
		
		{question:"在绝句中哪两句相粘：", choices:["第一二句","第二三句","第三四句","第一三句"], correntA: "第二三句"},
		
		{question:"按照王力先生的观点，以下各句可以称为孤平的是: ", choices:["仄仄平仄仄","仄平仄仄仄","仄平仄仄平","仄仄平平仄"], correntA: "仄平仄仄平"},
		
		{question:"下面哪个字是没有平仄两读的:", choices:["忘","看","识","听"], correntA: "识"},
		
		{question:"白日依山尽……更上一层楼。下面平仄标识哪个是正确的: ", choices:["平仄平平仄……仄仄仄平平","仄仄平平仄……仄仄平平平","仄仄平平仄……仄仄仄平平","平仄平平仄……仄仄平平平"], correntA: "仄仄平平仄……仄仄仄平平"},
		
		{question:"律诗中的颈联指第几联:", choices:["第一联","第二联","第三联","第四联"], correntA: "第三联"},
		
		{question:"律诗字尾联指哪两句:", choices:["一二句","三四句","五六句","七八句"], correntA: "七八句"},
		
		{question:"排律的对仗至少需要多少联:", choices:["两联","四联","十联","除首尾联以外都要对"], correntA: "除首尾联以外都要对"},
		
		{question:"以下哪一个词牌属于小令:", choices:["渔父","八声甘州","六州歌头","多丽"], correntA: "渔父"},
		
		{question:"下面哪组失对了:", choices:["山路元无雨，空翠湿人衣?","野径云俱黑，江船火独明?","万里悲秋常作客，百年多病独登台","江碧鸟逾白，山青花欲燃"], correntA: "山路元无雨，空翠湿人衣?"},
		
		{question:"下面哪组全部是入声字:", choices:["托拖脱","一吸笛枝","十没扑木","听说忽悲"], correntA: "十没扑木"},
		
		{question:"律诗对仗最为严格的两联是:", choices:["除首联以外","首尾联","全部对仗","中间两联"], correntA: "中间两联"},
		
		{question:"仄仄平平仄仄平句型，若第三字用了仄声需要本句救拗，用第几个字相救:", choices:["第二字","第四字","第六字","第五字"], correntA: "第五字"},
		
		{question:"在绝句中哪两句要相对:", choices:["一二句","一四句","二三句","以上都要"], correntA: "一二句"},
		
		{question:"南山宿雨晴，春入凤凰城。处处闻弦管，无非送酒声。这首五绝是哪种格式:", choices:["仄起首句入韵","平起首句入韵","平起首句不入韵","仄起首句不入韵"], correntA: "平起首句入韵"},
		
		{question:"所谓一三五不论，下面哪种句型不能不论:", choices:["平平仄仄仄平平","仄仄平平平仄仄","仄仄平平仄仄平","仄平仄仄仄平平"], correntA: "仄仄平平仄仄平"},
		
		{question:"声母f和哪两个韵母拼读时不论阴阳上去都是古入声:", choices:["ang和eng","an和u","i和in","a和o"], correntA: "a和o"},
		
		{question:"zh、ch、sh、r、 k和哪个韵母拼读时，不论阴阳上去都是古入声:", choices:["uo","ou","e","a"], correntA: "uo"},
		
		{question:"“夕”在平水韵哪个韵部:", choices:["十一陌","八齐","四支","五微"], correntA: "十一陌"},
		
		{question:"以下哪个普通话读音对应的汉字是入声字:", choices:["xian","duo","zhuo","he"], correntA: "zhuo"},
		
		{question:"现代汉语中哪三个音节的字，是没有入声字的:", choices:["zhi、chi、shi","de、te、ge","zi、ci、si","zhi、ting、du"], correntA: "zi、ci、si"},
		
		{question:"“篱”在平水韵中属于哪个韵部:", choices:["四支","九佳","十三覃","六麻"], correntA: "四支"},
		
		{question:"带有哪个韵母的汉字不会是入声字:", choices:["e","ue","uei","i"], correntA: "uei"},
		
		{question:"“西”在平水韵中属于哪个韵部:", choices:["四支","五微","六鱼","八齐"], correntA: "八齐"},
		
		{question:"排律能用几个韵:", choices:["一个","两个","三个","无限"], correntA: "一个"},
		
		{question:"所谓的二四六分明，下面哪种句型不一定分明:", choices:["平平仄仄仄平平","仄仄平平仄平仄","仄仄平平仄仄平","仄平仄仄仄平平"], correntA: "仄仄平平仄平仄"},
		{question:"韩愈的《初春小雨》“天街小雨润如酥，草色遥看近却无。最是一年好去处，绝胜烟柳满皇都。”是以下哪种情况:", choices:["挤韵","撞韵","落韵","都不是"], correntA: "撞韵"},
		{question:"“拥”在平水韵中属于哪个韵部:", choices:["八庚","二冬","二肿","一东"], correntA: "二肿"},
		
		{question:"下面哪个字是入声字:", choices:["发","过","么","剪"], correntA: "发"},
		
		{question:"以《平水韵》为准下面哪个韵部可以和九佳通押:", choices:["四支","六麻","十灰","五微"], correntA: "十灰"},
		
		{question:"此拗句“仄仄平仄仄”下句怎么救:", choices:["仄平仄平平","平平仄仄平","平平平仄平","平平仄平平"], correntA: "平平平仄平"},
		
		{question:"酒醒思卧簟，衣冷欲装绵。“醒”在此处的声调:", choices:["平声","仄声","轻声","都可以"], correntA: "平声"},
		
		{question:"五律是:", choices:["五言四句","五言八句","七言八句","七言四句"], correntA: "五言八句"},
		
		{question:"七律的第三四句也被称为:", choices:["首联","尾联","颈联","颔联"], correntA: "颔联"},
		
		{question:"“闻报故人当邂逅，便临近馆为迟留”用的是哪种对仗形式:", choices:["工对","错综对","流水对","a b c d隔句对"], correntA: "流水对"},
		
		{question:"律绝押韵，哪一句可押可不押:", choices:["首句","尾句","第二句","第三句"], correntA: "首句"},
		{question:"排律除了哪两联以外一律对仗:", choices:["首尾联","后两联","前两联","没有例外"], correntA: "首尾联"},
		
		{question:"一联中对仗，出句和对句完全同义或基本同义，称为什么:", choices:["合掌","孤平","借对","三平调"], correntA: "合掌"},
		
		{question:"律诗用韵通常是:", choices:["平声韵","仄声韵","入声韵","都可以"], correntA: "平声韵"},
		
		{question:"平仄两读而意义不同的字是:", choices:["忘","凭","醒","缝"], correntA: "缝"},
		{question:"律绝平仄定格皆有几种句式:", choices:["两种","四种","八种","很多种"], correntA: "四种"},
		
		{question:"五言的平平仄平仄，七言的（仄）仄平平仄平仄，律绝里这种句式多数被用在哪:", choices:["首联的出句","首联的对句","尾联的出句","尾联的对句"], correntA: "尾联的出句"},
	],
	//点击下一次触发事件
	nextEvent:function(){
		j++;
		switch(j){
			case 50:
			$(".next").text("查看你的分数")
			break;
			case 51:
			$(".next").css("display","none");
			myPoem.checkScoreEvent();
			break;
		}
		//先获取所有的题目出来
		randomCount--;//每次点击数组的长度就会减少，这样就可以避免undefined的出现了。
		random=Math.floor(Math.random()*randomCount);
		
		
		
		$(".title h2").text(allQArr[random].question);//会生成0到50的随机数；
		
		//选项随机
		var arry=[false,false,false,false];
		for(var i=1;i<5;i++){	
			for(var k=0;k<1000;k++){
				var ran=Math.floor(Math.random()*4);
				if(arry[ran]==false){
					$(".option"+i).text(allQArr[random].choices[ran]);
					arry[ran]=true;
					break;
					}else{
					continue;
				}			
			}
			
		}
	/* 	$(".option1").text(allQArr[random].choices[0]);
		$(".option2").text(allQArr[random].choices[1]);
		$(".option3").text(allQArr[random].choices[2]);
		$(".option4").text(allQArr[random].choices[3]); */
		ranNum.push(random);
        $(".CorrectAnswer").css("display","none"); 
		$(".ErrorAnswer").css("display","none");
		$(".next").css("display","none");
        $(".fenshu").text(+j+".");
		//myPoem.nextEvent();是和random保持一致的方法。
		//$(".option1").text();获取选项里面的内容。
	}, 
	//点击答案时的触发事件
	answerEvent:function(textContent){
		// Number(ranNum)+1
			if(textContent==allQArr[ranNum[q]].correntA){
				$(".CorrectAnswer").css("display","block");
				$(".CorrectAnswer").text("恭喜你答对了！"); 
				allScores+=2;
			}else{
				$(".ErrorAnswer").css("display","block");
				$(".ErrorAnswer").text("正确答案是："+allQArr[ranNum[q]].correntA);
			}
			$(".next").css("display","block");
		q++;
		allQArr.splice(random,1);//可以用.splice(从哪个位置开始,删除多少个参数);的方法删除数组里面的元素。
	},
	//查看分数时触发的事件
    checkScoreEvent:function(){
		$(".score").css("display","block");
		$(".score").text("你获得的分数是："+allScores+"；");
		$(".share").css("display","block");
		$(".concern").css("display","block");
		$(".title").css("display","none");
		$(".option1").css("display","none");
		$(".option2").css("display","none");
		$(".option3").css("display","none");
		$(".option4").css("display","none");
	},
	//分享时触发的事件
	shareEvent:function(){
		$(".zhezhao").css({"display":"block","position": "fixed","background": "#000","z-index": "1001","-moz-opacity": "0.7","opacity":".70","filter": "alpha(opacity=70)","width":"100%","height":"100%",});
		
		$(".shareImg").css({"display":"block","position": "absolute","top":"0px","right":"0px;","background": "#000","z-index": "1002","-moz-opacity": "0.7","opacity":".70","filter": "alpha(opacity=70)","width":"100%","height":"100%"});
	}
}



//将数组放到allQArr这个数组里面；
for(var i=0;i<=myPoem.allQ.length-1;i++ ){
	allQArr.push(myPoem.allQ[i]);
} 

$(document).ready(function(){
	//next按钮执行事件
	$(".next").click(function(){
		myPoem.nextEvent();
	})

	$(".option1").click(function(){
		var textContent=$(".option1").text();
		myPoem.answerEvent(textContent); 
	})

	$(".option2").click(function(){
		var textContent=$(".option2").text();
		myPoem.answerEvent(textContent); 
	})

	$(".option3").click(function(){
		var textContent=$(".option3").text();
		myPoem.answerEvent(textContent); 
	})

	$(".option4").click(function(){
		var textContent=$(".option4").text();
		myPoem.answerEvent(textContent); 
	})
	
	$(".share").click(function(){
		myPoem.shareEvent();
	})
	
	$(".shareImg").click(function(){
		$(".shareImg").css("display","none");
		$(".zhezhao").css("display","none");
	})
	$(".shine").click(function(){
		$("#container").css("display","none");
		$(".container").css("display","block");
		myPoem.nextEvent();
	})
})









