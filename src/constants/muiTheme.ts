import { createMuiTheme } from "@material-ui/core"
import { blue } from "@material-ui/core/colors"
import { jaJP } from "@material-ui/core/locale"

const muiTheme = createMuiTheme(
  {
    typography: {
      fontFamily: [
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
      ].join(","),
      fontSize: 14,
      button: {
        // ボタンラベルの大文字変換を防ぐ
        textTransform: "none",
      },
    },
    props: {
      MuiTextField: {
        // テキストフィールドのデフォルトスタイルの設定
        variant: "outlined",
      },
      // 入力コントロールのカラー設定
      MuiCheckbox: {
        color: "primary",
      },
      MuiRadio: {
        color: "primary",
      },
      MuiSwitch: {
        color: "primary",
      },
      // リストのサイズを小さくする
      MuiList: {
        dense: true,
      },
      // テーブルのサイズを小さくする
      MuiTable: {
        size: "small",
      },
    },
    palette: {
      // テーマカラーの設定
      primary: {
        // mainのみの指定でlightやdarkは自動設定
        main: blue["500"],
      },
    },
    mixins: {
      toolbar: {
        // ヘッダのサイズを小さくする
        minHeight: 42,
      },
    },
  },
  jaJP,
)

export default muiTheme
