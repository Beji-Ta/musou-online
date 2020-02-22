function calc(){
	calc1();
	calc2();
	calc1();
	if (document.forms[0].kirikae[0].checked){
		basic_radar();
	}else{
		basic_radar12();
	}
}
function calc1()	{
	buki_name = document.frm.buki.value;
	level_select = document.frm.level.value;

	buki_init(buki_name);
	level_init(buki_name,level_select);

	base[0] += level[0];
	base[1] += level[1];
	base[2] += level[2];
	base[3] += level[3];
	base[4] += level[4];
	base[5] += level[5];
	base[6] += level[6];

	for(i=0;i<7;i++){
		if(document.frm.rank[i].checked){
			rank = document.frm.rank[i].value - 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.up_k[i].checked){
			up[0] += document.frm.up_k[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.up_h[i].checked){
			up[1] += document.frm.up_h[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.up_b[i].checked){
			up[2] += document.frm.up_b[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.up_t[i].checked){
			up[3] += document.frm.up_t[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.up_m[i].checked){
			up[4] += document.frm.up_m[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm.toku_k[i].checked){
			up[0] += document.frm.toku_k[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm.toku_h[i].checked){
			up[1] += document.frm.toku_h[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm.toku_b[i].checked){
			up[2] += document.frm.toku_b[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm.toku_t[i].checked){
			up[3] += document.frm.toku_t[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm.toku_m[i].checked){
			up[4] += document.frm.toku_m[i].value * 1;
		}
	}

	num = new Array(0,0,0,0,0,0,0);

	for(i=0;i<6;i++){
		if(document.frm.num_k[i].checked){
			num[0] += document.frm.num_k[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm.num_h[i].checked){
			num[1] += document.frm.num_h[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm.num_b[i].checked){
			num[2] += document.frm.num_b[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm.num_t[i].checked){
			num[3] += document.frm.num_t[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm.num_m[i].checked){
			num[4] += document.frm.num_m[i].value * 1;
		}
	}

    huku = new Array(0,0,0,0,0,0,0);

	for(i=0;i<7;i++){
		huku[i] += document.frm.huku[i].value * 1;
	}

	busyo = new Array(0,0,0,0,0,0,0);

	for(i=0;i<5;i++){
		if(document.frm.busyo[i].checked){
			if(document.frm.netcafe.checked){
				busyo[i] += document.frm.busyo[i].value * 2;
			}
			else {
				busyo[i] += document.frm.busyo[i].value * 1;
			}
		}
	}

	densetsu = new Array(0,0,0,0,0,0,0);

	den_table = new Array(new Array(12,23,30),new Array(5,9,15),new Array(6,12,23),new Array(8,15,23));

	for(i=0;i<5;i++){
		if(document.frm.den_l[i].checked){
			den_l = i;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.den_t[i].checked){
			den_t = document.frm.den_t[i].value;
		}
	}

	if(den_l != 0){
		if(den_l == 4){
			for(i=0;i<5;i++){
				densetsu[i] = 1;
			}
			if(document.frm.idou_t[0].checked == false){
				densetsu[5] = 1;
			}
		}
		else{
			for(i=0;i<5;i++){
				densetsu[i] = den_table[Math.floor((den_t % Math.pow(10, 5-i))/ Math.pow(10, 4-i))][den_l-1];
			}
			for(i=0;i<6;i++){
				if(document.frm.idou_t[i].checked){
					densetsu[5] = document.frm.idou_t[i].value * 1;
				}
			}
		}
	}

	itm = new Array(0,0,0,0,0,0,0);

	for(i=0;i<3;i++){
		if(document.frm.item_k[i].checked){
			itm[0] += document.frm.item_k[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_h[i].checked){
			itm[1] += document.frm.item_h[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_b[i].checked){
			itm[2] += document.frm.item_b[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_t[i].checked){
			itm[3] += document.frm.item_t[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_m[i].checked){
			itm[4] += document.frm.item_m[i].value * 1;
		}
	}

	for(i=0;i<2;i++){
		if(document.frm.item_i[i].checked){
			itm[5] += document.frm.item_i[i].value * 1;
		}
	}

	for(i=0;i<2;i++){
		if(document.frm.item_j[i].checked){
			itm[6] += document.frm.item_j[i].value * 1;
		}
	}

	for(i=0;i<5;i++){
		switch(document.frm.kai[i].value){
		case "簡攻基":
			base[0] += 4;
			base[2] -= 4;
			break;
		case "簡破基":
			base[1] += 6;
			base[2] -= 4;
			break;
		case "簡防基":
			base[0] -= 2;
			base[1] -= 4;
			base[2] += 4;
			break;
		case "簡体基":
			base[3] += 8;
			base[4] -= 8;
			break;
		case "簡無基":
			base[3] -= 8;
			base[4] += 8;
			break;
		case "簡移基":
			base[0] -= 2;
			base[1] -= 2;
			base[2] -= 2;
			base[5] += 2;
			base[6] -= 2;
			break;
		case "簡ジ基":
			base[5] -= 1;
			base[6] += 2;
			break;
		case "本攻基":
			base[0] += 4;
			base[2] -= 2;
			break;
		case "本破基":
			base[1] += 6;
			base[2] -= 2;
			break;
		case "本防基":
			base[0] -= 1;
			base[1] -= 2;
			base[2] += 4;
			break;
		case "本体基":
			base[3] += 8;
			base[4] -= 4;
			break;
		case "本無基":
			base[3] -= 4;
			base[4] += 8;
			break;
		case "本移基":
			base[0] -= 1;
			base[1] -= 1;
			base[2] -= 1;
			base[5] += 2;
			base[6] -= 1;
			break;
		case "本ジ基":
			base[3] -= 2;
			base[4] -= 2;
			base[6] += 2;
			break;
		case "簡攻上":
			up[0] += 5;
			up[1] -= 2;
			up[2] -= 2;
			up[3] -= 2;
			up[4] -= 2;
			break;
		case "簡破上":
			up[0] -= 2;
			up[1] += 8;
			up[2] -= 2;
			up[3] -= 2;
			up[4] -= 2;
			break;
		case "簡防上":
			up[0] -= 2;
			up[1] -= 2;
			up[2] += 5;
			up[3] -= 2;
			up[4] -= 2;
			break;
		case "簡体上":
			up[0] -= 2;
			up[1] -= 2;
			up[2] -= 2;
			up[3] += 10;
			up[4] -= 2;
			break;
		case "簡無上":
			up[0] -= 2;
			up[1] -= 2;
			up[2] -= 2;
			up[3] -= 2;
			up[4] += 10;
			break;
		case "本攻上":
			up[0] += 5;
			up[1] -= 1;
			up[2] -= 1;
			up[3] -= 1;
			up[4] -= 1;
			break;
		case "本破上":
			up[0] -= 1;
			up[1] += 8;
			up[2] -= 1;
			up[3] -= 1;
			up[4] -= 1;
			break;
		case "本防上":
			up[0] -= 1;
			up[1] -= 1;
			up[2] += 5;
			up[3] -= 1;
			up[4] -= 1;
			break;
		case "本体上":
			up[0] -= 1;
			up[1] -= 1;
			up[2] -= 1;
			up[3] += 10;
			up[4] -= 1;
			break;
		case "本無上":
			up[0] -= 1;
			up[1] -= 1;
			up[2] -= 1;
			up[3] -= 1;
			up[4] += 10;
			break;
		case "簡枠":
			base[0] -= 2;
			base[1] -= 3;
			base[2] -= 2;
			base[3] -= 4;
			base[4] -= 4;
			break;
		case "本枠":
			base[0] -= 1;
			base[1] -= 2;
			base[2] -= 1;
			base[3] -= 2;
			base[4] -= 2;
			break;
		case "簡刻":
			base[0] -= 1;
			base[1] -= 2;
			base[2] -= 1;
			base[3] -= 2;
			base[4] -= 2;
			break;
		default:
		}
	}

	hosei += num[1];

	for(i=0;i<7;i++){
		document.frm.base[i].value = base[i];
	}
	for(i=0;i<5;i++){
		up[i] += (3 * rank);
		document.frm.up[i].value =  up[i];
		document.frm.slot[i].value =  slot[i];
	}

	waku2 = (rank + 3) * 4
	if(waku2 > 24)waku2 = 24;
	waku = 0;
	for(i=0;i<5;i++){
		waku += (num[i] + 1) * num[i] / 2;
		if(document.frm.kai[i].value == "簡枠" || document.frm.kai[i].value == "本枠")
		waku2 += 1;
	}
	document.frm.waku.value = waku +"/"+ waku2;

	total = new Array(0,0,0,0,0,0,0);

	for(i=0;i<7;i++){
		total1[i] = base[i] + up[i] * num[i] + densetsu[i];
		if(i<5 && document.frm.only.checked == false){
			total[i] = total1[i] + huku[i] + busyo[i] + itm[i] + Math.floor(total2[i]*0.2);
		}
		else {
			total[i] = total1[i] +  huku[i] + busyo[i] + itm[i];
		}
		document.frm.total[i].value = total[i];
	}

	document.frm.hakai_h.value = hosei / 10;

	hakai_d = Math.floor(Math.floor(total[1] / 6) * hosei / 10) + 1;

	document.frm.hakai_d.value = hakai_d;

	kaisu_h = new Array(0,0,0,0,0);

	kaisu_h[0] =  Math.ceil(300 / hakai_d);
	kaisu_h[1] =Math.ceil((Math.ceil(300/(kaisu_h[0]-1))-1)/hosei*10)*6-total[1];
	kaisu_h[2] =Math.ceil((Math.ceil(300/(kaisu_h[0]-2))-1)/hosei*10)*6-total[1];
	kaisu_h[3] =Math.ceil((Math.ceil(300/(kaisu_h[0]))-1)/hosei*10)*6-total[1]-1;
	kaisu_h[4] =Math.ceil((Math.ceil(300/(kaisu_h[0]+1))-1)/hosei*10)*6-total[1]-1;

	for(i=0;i<5;i++){
		document.frm.kaisu_h[i].value = kaisu_h[i];
	}

	kaisu_g = new Array(0,0,0,0,0);

	kaisu_g[0] =  Math.ceil(600 / hakai_d);
	kaisu_g[1] =Math.ceil((Math.ceil(600/(kaisu_g[0]-1))-1)/hosei*10)*6-total[1];
	kaisu_g[2] =Math.ceil((Math.ceil(600/(kaisu_g[0]-2))-1)/hosei*10)*6-total[1];
	kaisu_g[3] =Math.ceil((Math.ceil(600/(kaisu_g[0]))-1)/hosei*10)*6-total[1]-1;
	kaisu_g[4] =Math.ceil((Math.ceil(600/(kaisu_g[0]+1))-1)/hosei*10)*6-total[1]-1;

	for(i=0;i<5;i++){
		document.frm.kaisu_g[i].value = kaisu_g[i];
	}

	if(total[2]>=200){
		hosei_b = total[2];
	}
	else {
		hosei_b = total[2] + Math.floor((200 - total[2]) / 10);
	}

	document.frm.hosei_b.value = hosei_b;
	document.frm.t2.value = total[3];
	document.frm.taikyu.value = hosei_b * total[3];

	for(i=0;i<3;i++){
		document.frm.husui[i].value = Math.floor(num[3] / 2 )+ i + 1;
		document.frm.kaihuku[i].value = (Math.floor(num[3] / 2 )+ i + 1) * hosei_b;
	}

	document.frm.motion.value = motion;
	document.frm.shime.value = shime;
	temp = total[4] - offset1;
	kaisu_m = Math.ceil(temp / kankaku) + offset2;
	document.frm.kaisu_m[0].value = kaisu_m;
	document.frm.kaisu_m[1].value = (kaisu_m - offset2) * kankaku + offset1 + 1 - total[4];
	document.frm.kaisu_m[2].value = (kaisu_m - offset2 + 1) * kankaku + offset1 + 1 - total[4];
	document.frm.kaisu_m[3].value = (kaisu_m - offset2 - 1) * kankaku + offset1 - total[4];
	document.frm.kaisu_m[4].value = (kaisu_m - offset2 - 2) * kankaku + offset1 - total[4];

	//根性補正込み耐久度計算
	document.frm.kh.value = Math.ceil(total[3]*4/3*hosei_b);
}

function all_p(){
	document.frm.up_k[2].checked = true;
	document.frm.up_h[2].checked = true;
	document.frm.up_b[2].checked = true;
	document.frm.up_t[2].checked = true;
	document.frm.up_m[2].checked = true;
	calc();
}

function all_e(){
	document.frm.up_k[1].checked = true;
	document.frm.up_h[1].checked = true;
	document.frm.up_b[1].checked = true;
	document.frm.up_t[1].checked = true;
	document.frm.up_m[1].checked = true;
	calc();
}

function full(){
	document.frm.toku_k[8].checked = true;
	document.frm.toku_h[8].checked = true;
	document.frm.toku_b[8].checked = true;
	document.frm.toku_t[8].checked = true;
	document.frm.toku_m[8].checked = true;
	calc();
}

function toku_reset(){
	document.frm.toku_k[0].checked = true;
	document.frm.toku_h[0].checked = true;
	document.frm.toku_b[0].checked = true;
	document.frm.toku_t[0].checked = true;
	document.frm.toku_m[0].checked = true;
	calc();
}

function kkk(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡攻基";
			break;
		}
	}
	calc();
}

function kkh(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡破基";
			break;
		}
	}
	calc();
}

function kkb(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡防基";
			break;
		}
	}
	calc();
}

function kkt(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡体基";
			break;
		}
	}
	calc();
}

function kkm(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡無基";
			break;
		}
	}
	calc();
}

function kki(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡移基";
			break;
		}
	}
	calc();
}

function kkj(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡ジ基";
			break;
		}
	}
	calc();
}

function hkk(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本攻基";
			break;
		}
	}
	calc();
}

function hkh(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本破基";
			break;
		}
	}
	calc();
}

function hkb(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本防基";
			break;
		}
	}
	calc();
}

function hkt(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本体基";
			break;
		}
	}
	calc();
}

function hkm(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本無基";
			break;
		}
	}
	calc();
}

function hki(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本移基";
			break;
		}
	}
	calc();
}

function hkj(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本ジ基";
			break;
		}
	}
	calc();
}

function kjk(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡攻上";
			break;
		}
	}
	calc();
}

function kjh(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡破上";
			break;
		}
	}
	calc();
}

function kjb(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡防上";
			break;
		}
	}
	calc();
}

function kjt(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡体上";
			break;
		}
	}
	calc();
}

function kjm(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡無上";
			break;
		}
	}
	calc();
}

function kw(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡枠";
			break;
		}
	}
	calc();
}

function kk(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "簡刻";
			break;
		}
	}
	calc();
}

function hjk(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本攻上";
			break;
		}
	}
	calc();
}

function hjh(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本破上";
			break;
		}
	}
	calc();
}

function hjb(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本防上";
			break;
		}
	}
	calc();
}

function hjt(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本体上";
			break;
		}
	}
	calc();
}

function hjm(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本無上";
			break;
		}
	}
	calc();
}

function hw(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本枠";
			break;
		}
	}
	calc();
}

function hk(){
	for(i=0;i<5;i++){
		if(	document.frm.kai[i].value == "なし"){
			document.frm.kai[i].value = "本刻";
			break;
		}
	}
	calc();
}

function kai_del1(){
	document.frm.kai[0].value = "なし";
	calc();
}

function kai_del2(){
	document.frm.kai[1].value = "なし";
	calc();
}

function kai_del3(){
	document.frm.kai[2].value = "なし";
	calc();
}

function kai_del4(){
	document.frm.kai[3].value = "なし";
	calc();
}

function kai_del5(){
	document.frm.kai[4].value = "なし";
	calc();
}

function kai_reset(){
	for(i=0;i<5;i++){
		document.frm.kai[i].value = "なし";
	}
	calc();
}

function num_reset(){
	document.frm.num_k[0].checked = true;
	document.frm.num_h[0].checked = true;
	document.frm.num_b[0].checked = true;
	document.frm.num_t[0].checked = true;
	document.frm.num_m[0].checked = true;
	calc();
}

function calc2()	{
	buki_name = document.frm2.buki.value;
	level_select = document.frm2.level.value;

	buki_init(buki_name);
	level_init(buki_name,level_select);

	base[0] += level[0];
	base[1] += level[1];
	base[2] += level[2];
	base[3] += level[3];
	base[4] += level[4];
	base[5] += level[5];
	base[6] += level[6];

	for(i=0;i<7;i++){
		if(document.frm2.rank[i].checked){
			rank = document.frm2.rank[i].value - 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm2.up_k[i].checked){
			up[0] += document.frm2.up_k[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm2.up_h[i].checked){
			up[1] += document.frm2.up_h[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm2.up_b[i].checked){
			up[2] += document.frm2.up_b[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm2.up_t[i].checked){
			up[3] += document.frm2.up_t[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm2.up_m[i].checked){
			up[4] += document.frm2.up_m[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm2.toku_k[i].checked){
			up[0] += document.frm2.toku_k[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm2.toku_h[i].checked){
			up[1] += document.frm2.toku_h[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm2.toku_b[i].checked){
			up[2] += document.frm2.toku_b[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm2.toku_t[i].checked){
			up[3] += document.frm2.toku_t[i].value * 1;
		}
	}

	for(i=0;i<9;i++){
		if(document.frm2.toku_m[i].checked){
			up[4] += document.frm2.toku_m[i].value * 1;
		}
	}

	num = new Array(0,0,0,0,0,0,0);

	for(i=0;i<6;i++){
		if(document.frm2.num_k[i].checked){
			num[0] += document.frm2.num_k[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm2.num_h[i].checked){
			num[1] += document.frm2.num_h[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm2.num_b[i].checked){
			num[2] += document.frm2.num_b[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm2.num_t[i].checked){
			num[3] += document.frm2.num_t[i].value * 1;
		}
	}

	for(i=0;i<6;i++){
		if(document.frm2.num_m[i].checked){
			num[4] += document.frm2.num_m[i].value * 1;
		}
	}

    huku = new Array(0,0,0,0,0,0,0);

	for(i=0;i<7;i++){
		huku[i] += document.frm.huku[i].value * 1;
	}

	busyo = new Array(0,0,0,0,0,0,0);

	for(i=0;i<5;i++){
		if(document.frm.busyo[i].checked){
			if(document.frm.netcafe.checked){
				busyo[i] += document.frm.busyo[i].value * 2;
			}
			else {
				busyo[i] += document.frm.busyo[i].value * 1;
			}
		}
	}

	densetsu = new Array(0,0,0,0,0,0,0);

	den_table = new Array(new Array(12,23,30),new Array(5,9,15),new Array(6,12,23),new Array(8,15,23));

	for(i=0;i<5;i++){
		if(document.frm2.den_l[i].checked){
			den_l = i;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm2.den_t[i].checked){
			den_t = document.frm2.den_t[i].value;
		}
	}

	if(den_l != 0){
		if(den_l == 4){
			for(i=0;i<5;i++){
				densetsu[i] = 1;
			}
			if(document.frm2.idou_t[0].checked == false){
				densetsu[5] = 1;
			}
		}
		else{
			for(i=0;i<5;i++){
				densetsu[i] = den_table[Math.floor((den_t % Math.pow(10, 5-i))/ Math.pow(10, 4-i))][den_l-1];
			}
			for(i=0;i<6;i++){
				if(document.frm2.idou_t[i].checked){
					densetsu[5] = document.frm2.idou_t[i].value * 1;
				}
			}
		}
	}

	itm = new Array(0,0,0,0,0,0,0);

	for(i=0;i<3;i++){
		if(document.frm.item_k[i].checked){
			itm[0] += document.frm.item_k[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_h[i].checked){
			itm[1] += document.frm.item_h[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_b[i].checked){
			itm[2] += document.frm.item_b[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_t[i].checked){
			itm[3] += document.frm.item_t[i].value * 1;
		}
	}

	for(i=0;i<3;i++){
		if(document.frm.item_m[i].checked){
			itm[4] += document.frm.item_m[i].value * 1;
		}
	}

	for(i=0;i<2;i++){
		if(document.frm.item_i[i].checked){
			itm[5] += document.frm.item_i[i].value * 1;
		}
	}

	for(i=0;i<2;i++){
		if(document.frm.item_j[i].checked){
			itm[6] += document.frm.item_j[i].value * 1;
		}
	}

	for(i=0;i<5;i++){
		switch(document.frm2.kai[i].value){
		case "簡攻基":
			base[0] += 4;
			base[2] -= 4;
			break;
		case "簡破基":
			base[1] += 6;
			base[2] -= 4;
			break;
		case "簡防基":
			base[0] -= 2;
			base[1] -= 4;
			base[2] += 4;
			break;
		case "簡体基":
			base[3] += 8;
			base[4] -= 8;
			break;
		case "簡無基":
			base[3] -= 8;
			base[4] += 8;
			break;
		case "簡移基":
			base[0] -= 2;
			base[1] -= 2;
			base[2] -= 2;
			base[5] += 2;
			base[6] -= 2;
			break;
		case "簡ジ基":
			base[5] -= 1;
			base[6] += 2;
			break;
		case "本攻基":
			base[0] += 4;
			base[2] -= 2;
			break;
		case "本破基":
			base[1] += 6;
			base[2] -= 2;
			break;
		case "本防基":
			base[0] -= 1;
			base[1] -= 2;
			base[2] += 4;
			break;
		case "本体基":
			base[3] += 8;
			base[4] -= 4;
			break;
		case "本無基":
			base[3] -= 4;
			base[4] += 8;
			break;
		case "本移基":
			base[0] -= 1;
			base[1] -= 1;
			base[2] -= 1;
			base[5] += 2;
			base[6] -= 1;
			break;
		case "本ジ基":
			base[3] -= 2;
			base[4] -= 2;
			base[6] += 2;
			break;
		case "簡攻上":
			up[0] += 5;
			up[1] -= 2;
			up[2] -= 2;
			up[3] -= 2;
			up[4] -= 2;
			break;
		case "簡破上":
			up[0] -= 2;
			up[1] += 8;
			up[2] -= 2;
			up[3] -= 2;
			up[4] -= 2;
			break;
		case "簡防上":
			up[0] -= 2;
			up[1] -= 2;
			up[2] += 5;
			up[3] -= 2;
			up[4] -= 2;
			break;
		case "簡体上":
			up[0] -= 2;
			up[1] -= 2;
			up[2] -= 2;
			up[3] += 10;
			up[4] -= 2;
			break;
		case "簡無上":
			up[0] -= 2;
			up[1] -= 2;
			up[2] -= 2;
			up[3] -= 2;
			up[4] += 10;
			break;
		case "本攻上":
			up[0] += 5;
			up[1] -= 1;
			up[2] -= 1;
			up[3] -= 1;
			up[4] -= 1;
			break;
		case "本破上":
			up[0] -= 1;
			up[1] += 8;
			up[2] -= 1;
			up[3] -= 1;
			up[4] -= 1;
			break;
		case "本防上":
			up[0] -= 1;
			up[1] -= 1;
			up[2] += 5;
			up[3] -= 1;
			up[4] -= 1;
			break;
		case "本体上":
			up[0] -= 1;
			up[1] -= 1;
			up[2] -= 1;
			up[3] += 10;
			up[4] -= 1;
			break;
		case "本無上":
			up[0] -= 1;
			up[1] -= 1;
			up[2] -= 1;
			up[3] -= 1;
			up[4] += 10;
			break;
		case "簡枠":
			base[0] -= 2;
			base[1] -= 3;
			base[2] -= 2;
			base[3] -= 4;
			base[4] -= 4;
			break;
		case "本枠":
			base[0] -= 1;
			base[1] -= 2;
			base[2] -= 1;
			base[3] -= 2;
			base[4] -= 2;
			break;
		case "簡刻":
			base[0] -= 1;
			base[1] -= 2;
			base[2] -= 1;
			base[3] -= 2;
			base[4] -= 2;
			break;
		default:
		}
	}

	hosei += num[1];

	for(i=0;i<7;i++){
		document.frm2.base[i].value = base[i];
	}
	for(i=0;i<5;i++){
		up[i] += (3 * rank);
		document.frm2.up[i].value =  up[i];
		document.frm2.slot[i].value =  slot[i];
	}

	waku2 = (rank + 3) * 4
	if(waku2 > 24)waku2 = 24;
	waku = 0;
	for(i=0;i<5;i++){
		waku += (num[i] + 1) * num[i] / 2;
		if(document.frm2.kai[i].value == "簡枠" || document.frm2.kai[i].value == "本枠")
		waku2 += 1;
	}
	document.frm2.waku.value = waku +"/"+ waku2;

	total = new Array(0,0,0,0,0,0,0);

	for(i=0;i<7;i++){
		total2[i] = base[i] + up[i] * num[i] + densetsu[i];
		if(i<5 && document.frm2.only.checked == false){
			total[i] = total2[i]  + huku[i] + busyo[i] + itm[i] + Math.floor(total1[i]*0.2);
		}
		else {
			total[i] = total2[i] + huku[i] + busyo[i] + itm[i];
		}
		document.frm2.total[i].value = total[i];
	}

	document.frm2.hakai_h.value = hosei / 10;

	hakai_d = Math.floor(Math.floor(total[1] / 6) * hosei / 10) + 1;

	document.frm2.hakai_d.value = hakai_d;

	kaisu_h = new Array(0,0,0,0,0);

	kaisu_h[0] =  Math.ceil(300 / hakai_d);
	kaisu_h[1] =Math.ceil((Math.ceil(300/(kaisu_h[0]-1))-1)/hosei*10)*6-total[1];
	kaisu_h[2] =Math.ceil((Math.ceil(300/(kaisu_h[0]-2))-1)/hosei*10)*6-total[1];
	kaisu_h[3] =Math.ceil((Math.ceil(300/(kaisu_h[0]))-1)/hosei*10)*6-total[1]-1;
	kaisu_h[4] =Math.ceil((Math.ceil(300/(kaisu_h[0]+1))-1)/hosei*10)*6-total[1]-1;

	for(i=0;i<5;i++){
		document.frm2.kaisu_h[i].value = kaisu_h[i];
	}

	kaisu_g = new Array(0,0,0,0,0);

	kaisu_g[0] =  Math.ceil(600 / hakai_d);
	kaisu_g[1] =Math.ceil((Math.ceil(600/(kaisu_g[0]-1))-1)/hosei*10)*6-total[1];
	kaisu_g[2] =Math.ceil((Math.ceil(600/(kaisu_g[0]-2))-1)/hosei*10)*6-total[1];
	kaisu_g[3] =Math.ceil((Math.ceil(600/(kaisu_g[0]))-1)/hosei*10)*6-total[1]-1;
	kaisu_g[4] =Math.ceil((Math.ceil(600/(kaisu_g[0]+1))-1)/hosei*10)*6-total[1]-1;

	for(i=0;i<5;i++){
		document.frm2.kaisu_g[i].value = kaisu_g[i];
	}

	if(total[2]>=200){
		hosei_b = total[2];
	}
	else {
		hosei_b = total[2] + Math.floor((200 - total[2]) / 10);
	}

	document.frm2.hosei_b.value = hosei_b;
	document.frm2.t2.value = total[3];
	document.frm2.taikyu.value = hosei_b * total[3];

	for(i=0;i<3;i++){
		document.frm2.husui[i].value = Math.floor(num[3] / 2 )+ i + 1;
		document.frm2.kaihuku[i].value = (Math.floor(num[3] / 2 )+ i + 1) * hosei_b;
	}

	document.frm2.motion.value = motion;
	document.frm2.shime.value = shime;
	temp = total[4] - offset1;
	kaisu_m = Math.ceil(temp / kankaku) + offset2;
	document.frm2.kaisu_m[0].value = kaisu_m;
	document.frm2.kaisu_m[1].value = (kaisu_m - offset2) * kankaku + offset1 + 1 - total[4];
	document.frm2.kaisu_m[2].value = (kaisu_m - offset2 + 1) * kankaku + offset1 + 1 - total[4];
	document.frm2.kaisu_m[3].value = (kaisu_m - offset2 - 1) * kankaku + offset1 - total[4];
	document.frm2.kaisu_m[4].value = (kaisu_m - offset2 - 2) * kankaku + offset1 - total[4];

	//根性補正込み耐久度計算
	document.frm2.kh.value = Math.ceil(total[3]*4/3*hosei_b);
}

function all_p2(){
	document.frm2.up_k[2].checked = true;
	document.frm2.up_h[2].checked = true;
	document.frm2.up_b[2].checked = true;
	document.frm2.up_t[2].checked = true;
	document.frm2.up_m[2].checked = true;
	calc();
}

function all_e2(){
	document.frm2.up_k[1].checked = true;
	document.frm2.up_h[1].checked = true;
	document.frm2.up_b[1].checked = true;
	document.frm2.up_t[1].checked = true;
	document.frm2.up_m[1].checked = true;
	calc();
}

function full2(){
	document.frm2.toku_k[8].checked = true;
	document.frm2.toku_h[8].checked = true;
	document.frm2.toku_b[8].checked = true;
	document.frm2.toku_t[8].checked = true;
	document.frm2.toku_m[8].checked = true;
	calc();
}

function toku_reset2(){
	document.frm2.toku_k[0].checked = true;
	document.frm2.toku_h[0].checked = true;
	document.frm2.toku_b[0].checked = true;
	document.frm2.toku_t[0].checked = true;
	document.frm2.toku_m[0].checked = true;
	calc();
}

function kkk2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡攻基";
			break;
		}
	}
	calc();
}

function kkh2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡破基";
			break;
		}
	}
	calc();
}

function kkb2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡防基";
			break;
		}
	}
	calc();
}

function kkt2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡体基";
			break;
		}
	}
	calc();
}

function kkm2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡無基";
			break;
		}
	}
	calc();
}

function kki2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡移基";
			break;
		}
	}
	calc();
}

function kkj2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡ジ基";
			break;
		}
	}
	calc();
}

function hkk2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本攻基";
			break;
		}
	}
	calc();
}

function hkh2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本破基";
			break;
		}
	}
	calc();
}

function hkb2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本防基";
			break;
		}
	}
	calc();
}

function hkt2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本体基";
			break;
		}
	}
	calc();
}

function hkm2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本無基";
			break;
		}
	}
	calc();
}

function hki2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本移基";
			break;
		}
	}
	calc();
}

function hkj2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本ジ基";
			break;
		}
	}
	calc();
}

function kjk2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡攻上";
			break;
		}
	}
	calc();
}

function kjh2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡破上";
			break;
		}
	}
	calc();
}

function kjb2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡防上";
			break;
		}
	}
	calc();
}

function kjt2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡体上";
			break;
		}
	}
	calc();
}

function kjm2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡無上";
			break;
		}
	}
	calc();
}

function kw2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡枠";
			break;
		}
	}
	calc();
}

function kk2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "簡刻";
			break;
		}
	}
	calc();
}

function hjk2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本攻上";
			break;
		}
	}
	calc();
}

function hjh2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本破上";
			break;
		}
	}
	calc();
}

function hjb2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本防上";
			break;
		}
	}
	calc();
}

function hjt2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本体上";
			break;
		}
	}
	calc();
}

function hjm2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本無上";
			break;
		}
	}
	calc();
}

function hw2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本枠";
			break;
		}
	}
	calc();
}

function hk2(){
	for(i=0;i<5;i++){
		if(	document.frm2.kai[i].value == "なし"){
			document.frm2.kai[i].value = "本刻";
			break;
		}
	}
	calc();
}

function kai_del12(){
	document.frm2.kai[0].value = "なし";
	calc();
}

function kai_del22(){
	document.frm2.kai[1].value = "なし";
	calc();
}

function kai_del32(){
	document.frm2.kai[2].value = "なし";
	calc();
}

function kai_del42(){
	document.frm2.kai[3].value = "なし";
	calc();
}

function kai_del52(){
	document.frm2.kai[4].value = "なし";
	calc();
}

function kai_reset2(){
	for(i=0;i<5;i++){
		document.frm2.kai[i].value = "なし";
	}
	calc();
}

function num_reset2(){
	document.frm2.num_k[0].checked = true;
	document.frm2.num_h[0].checked = true;
	document.frm2.num_b[0].checked = true;
	document.frm2.num_t[0].checked = true;
	document.frm2.num_m[0].checked = true;
	calc();
}
