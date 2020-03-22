$(function () {
  var columns = [
    {id: "id", name: "ID", field: "id", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "wepon", name: "武器名", field: "wepon", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "weponkn", name: "武器カナ", field: "weponkn", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c1_totsu", name: "C1突", field: "c1_totsu", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c6_totsu", name: "C6突", field: "c6_totsu", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c1_sai", name: "C1砕", field: "c1_sai", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c6_sai", name: "C6砕", field: "c6_sai", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "C1_tate", name: "C1盾", field: "C1_tate", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c6_tate", name: "C6盾", field: "c6_tate", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "C1_jin", name: "C1陣", field: "C1_jin", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c6_jin", name: "C6陣", field: "c6_jin", width: 60,  sortable: true, editor: Slick.Editors.Text},
    {id: "c6_ei", name: "C6衛", field: "c6_ei", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c6_ha", name: "C6覇", field: "c6_ha", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c2", name: "C2", field: "c2", width: 60,  sortable: true, editor: Slick.Editors.Text},
    {id: "c3", name: "C3", field: "c3", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c4", name: "C4", field: "c4", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "c5", name: "C5", field: "c5", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "jc", name: "JC", field: "jc", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "ja", name: "JA", field: "ja", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "d", name: "D", field: "d", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n1", name: "N1", field: "n1", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n2", name: "N2", field: "n2", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n3", name: "N3", field: "n3", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n4", name: "N4", field: "n4", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n5", name: "N5", field: "n5", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n6", name: "N6", field: "n6", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n7", name: "N7", field: "n7", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n8", name: "N8", field: "n8", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n9", name: "N9", field: "n9", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n_musou", name: "無双", field: "n_musou", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "s_musou", name: "真無双", field: "s_musou", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "n_musou_f", name: "無双末", field: "n_musou_f", width: 60, sortable: true, editor: Slick.Editors.Text},
    {id: "s_musou_f", name: "真無双末", field: "s_musou_f", width: 60, sortable: true, editor: Slick.Editors.Text},
  ];

  var data = [
    {
      cid: 1,
      id: "001",
      wepon: "偃月刀",
      weponkn: "ｴﾝｹﾞﾂﾄｳ",
      c1_totsu: "12(属)",
      c6_totsu: "12(属)",
      c1_sai:"14(属),14(属)",
      c6_sai:"25(属),25(属)",
      C1_tate:"20",
      c6_tate:"25(属)",
      C1_jin:"13(属),13(属),15(属)",
      c6_jin:"15(属),13(属),15(属)",
      c6_ei:"30(属)",
      c6_ha:"15(属)*2,15(風)",
      c2:"",
      c3:"",
      c4:"",
      c5:"",
      jc:"",
      ja:"",
      d:"",
      n1:"",
      n2:"",
      n3:"",
      n4:"",
      n5:"",
      n6:"",
      n7:"",
      n8:"",
      n9:"",
      n_musou:"",
      s_musou:"",
      n_musou_f: "",
      s_musou_f: ""
   },
   {
    cid: 2,
    id: "002",
    wepon: "大斧",
    weponkn: "ﾀﾞｲﾌ",
    c1_totsu: "12(属)",
    c6_totsu: "12(属)",
    c1_sai:"15,8(属)",
    c6_sai:"15(属),10(属)",
    C1_tate:"15/20",
    c6_tate:"17(属)/22(属)",
    C1_jin:"14",
    c6_jin:"18(属)",
    c6_ei:"10(属),18(属)/12(属)",
    c6_ha:"10(属),10(属),15(属)",
    c2:"",
    c3:"",
    c4:"",
    c5:"",
    jc:"",
    ja:"",
    d:"",
    n1:"",
    n2:"",
    n3:"",
    n4:"",
    n5:"",
    n6:"",
    n7:"",
    n8:"",
    n9:"",
    n_musou:"",
    s_musou:"",
    n_musou_f: "",
    s_musou_f: ""
 },
 {
  cid: 3,
  id: "003",
  wepon: "砕棒",
  weponkn: "ｻｲﾎﾞｳ",
  c1_totsu: "25(属)",
  c6_totsu: "30(属)",
  c1_sai:"15(属),18(属)",
  c6_sai:"18(属),18(属)",
  C1_tate:"6*3,6",
  c6_tate:"6(属)*3,6(属)",
  C1_jin:"12",
  c6_jin:"14(属)",
  c6_ei:"15,15(属)",
  c6_ha:"13,12,12(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 4,
  id: "004",
  wepon: "鉄鞭",
  weponkn: "ﾃﾂﾍﾞﾝ",
  c1_totsu: "20(属)",
  c6_totsu: "20(属)",
  c1_sai:"15(属),15(属),20(属)",
  c6_sai:"18(属),15(属),20(属)",
  C1_tate:"20(属)",
  c6_tate:"20(属)",
  C1_jin:"12(炎)",
  c6_jin:"12(炎)",
  c6_ei:"30(属)",
  c6_ha:"25(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 5,
  id: "005",
  wepon: "朴刀",
  weponkn: "ﾎﾞｸﾄｳ",
  c1_totsu: "3(属)",
  c6_totsu: "5(属)",
  c1_sai:"15(属),15,13(属)",
  c6_sai:"15(属),15,13(属)",
  C1_tate:"15,17(属)",
  c6_tate:"15(属),17(属)",
  C1_jin:"5,12(属),14(属)",
  c6_jin:"5,12(属),16(属)",
  c6_ei:"15(属)",
  c6_ha:"5(属),5(属),10,12(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 6,
  id: "006",
  wepon: "甲刀",
  weponkn: "ｺｳﾄｳ",
  c1_totsu: "10,10",
  c6_totsu: "17(属),17",
  c1_sai:"17,12(属)",
  c6_sai:"17,14(属)",
  C1_tate:"10*4,17,15(炎)",
  c6_tate:"10*4,17,15(炎)",
  C1_jin:"10",
  c6_jin:"14(属)",
  c6_ei:"17(属),20,12,10(属),8*3,12(属)",
  c6_ha:"20(炎)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 7,
  id: "007",
  wepon: "砕棍",
  weponkn: "ｻｲｺﾝ",
  c1_totsu: "3(属)",
  c6_totsu: "5(属)",
  c1_sai:"12",
  c6_sai:"12",
  C1_tate:"15,7,7,7,10(属)",
  c6_tate:"17,10,10,10(属),15(属)",
  C1_jin:"18,10(属),5(炎)",
  c6_jin:"18(属),15(属),5(炎)",
  c6_ei:"20(属),20(属)",
  c6_ha:"15(属),18(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 8,
  id: "008",
  wepon: "双鞭",
  weponkn: "ｿｳﾍﾞﾝ",
  c1_totsu: "13(属)",
  c6_totsu: "15(属)",
  c1_sai:"15(属)",
  c6_sai:"15(属)",
  C1_tate:"15",
  c6_tate:"13(属)",
  C1_jin:"14,15(属)",
  c6_jin:"16(属),15(属)",
  c6_ei:"18(属)",
  c6_ha:"10,10,15(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 9,
  id: "009",
  wepon: "戦斧",
  weponkn: "ｾﾝﾌﾟ",
  c1_totsu: "22(属)",
  c6_totsu: "25(属)",
  c1_sai:"10*2",
  c6_sai:"15(属)*2",
  C1_tate:"12",
  c6_tate:"15(属)",
  C1_jin:"10",
  c6_jin:"15(属)",
  c6_ei:"25(属)",
  c6_ha:"8(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 10,
  id: "010",
  wepon: "双戟",
  weponkn: "ｿｳｹﾞｷ",
  c1_totsu: "12(属)",
  c6_totsu: "14(属)",
  c1_sai:"15",
  c6_sai:"20(属)",
  C1_tate:"18(属),15",
  c6_tate:"22(属),20(属)",
  C1_jin:"15(属)",
  c6_jin:"18(属)",
  c6_ei:"30(属)",
  c6_ha:"10*2,10(属),15(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
{
  cid: 11,
  id: "011",
  wepon: "双剣",
  weponkn: "ｿｳｹﾝ",
  c1_totsu: "10,10(属)/10",
  c6_totsu: "12,10(属)/12(属)",
  c1_sai:"15",
  c6_sai:"20(属)",
  C1_tate:"18(属),15",
  c6_tate:"22(属),20(属)",
  C1_jin:"15(属)",
  c6_jin:"18(属)",
  c6_ei:"30(属)",
  c6_ha:"10*2,10(属),15(属)",
  c2:"",
  c3:"",
  c4:"",
  c5:"",
  jc:"",
  ja:"",
  d:"",
  n1:"",
  n2:"",
  n3:"",
  n4:"",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n_musou:"",
  s_musou:"",
  n_musou_f: "",
  s_musou_f: ""
},
  ];
  var nextCid = data.length + 1;

  var options = {
    editable: true,
    autoEdit: false,
    multiColumnSort: true,
    showHeaderRow: true,
    headerRowHeight: 30,
    explicitInitialization: true
  };

  var dataView = new Slick.Data.DataView();
  var grid = new Slick.Grid("#myGrid", dataView, columns, options);
  grid.setSelectionModel(new Slick.RowSelectionModel());

  grid.onSort.subscribe(function (e, args) {
    var cols = args.sortCols;

    dataView.sort(function (dataRow1, dataRow2) {
      for (var i = 0, l = cols.length; i < l; i++) {
        var field = cols[i].sortCol.field;
        var sign = cols[i].sortAsc ? 1 : -1;
        var value1 = dataRow1[field], value2 = dataRow2[field];
        var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
        if (result != 0) {
          return result;
        }
      }
      return 0;
    });
  });

  var columnFilters = {};
  function filter(item) {
    for (var columnId in columnFilters) {
      if (columnId !== undefined && columnFilters[columnId] !== "") {
        var c = grid.getColumns()[grid.getColumnIndex(columnId)];
        var val = item[c.field];
        if (val === undefined || val.indexOf(columnFilters[columnId]) === -1) {
          return false;
        }
      }
    }
    return true;
  }

  grid.onHeaderRowCellRendered.subscribe(function (e, args) {
    if (args.column.id === "id") return;
    var cell = $(args.node);
    cell.empty();
    $(document.createElement("input"))
      .attr("type", "text")
      .data("columnId", args.column.id)
      .val(columnFilters[args.column.id])
      .appendTo(cell);
  });

  function updateFilters() {
    var columnId = $(this).data("columnId");
    if (columnId != null) {
      columnFilters[columnId] = $.trim($(this).val());
      dataView.refresh();
    }
  }
  $(grid.getHeaderRow()).japaneseInputChange('input[type=text]', updateFilters);

  grid.init();

  dataView.onRowCountChanged.subscribe(function (e, args) {
    grid.updateRowCount();
    grid.render();
  });

  dataView.onRowsChanged.subscribe(function (e, args) {
    grid.invalidateRows(args.rows);
    grid.render();
  });

  dataView.beginUpdate();
  dataView.setItems(data, "cid");
  dataView.setFilter(filter);
  dataView.endUpdate();
});
