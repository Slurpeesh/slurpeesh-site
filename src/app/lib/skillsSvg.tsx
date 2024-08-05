import AndroidStudioSvg from '@/features/svg/AndroidStudioSvg'
import CssSvg from '@/features/svg/CssSvg'
import ElectronSvg from '@/features/svg/ElectronSvg'
import FigmaSvg from '@/features/svg/FigmaSvg'
import HtmlSvg from '@/features/svg/HtmlSvg'
import JsSvg from '@/features/svg/JsSvg'
import KotlinSvg from '@/features/svg/KotlinSvg'
import NodejsSvg from '@/features/svg/NodejsSvg'
import OtherSvg from '@/features/svg/OtherSvg'
import PythonSvg from '@/features/svg/PythonSvg'
import ReactRouterSvg from '@/features/svg/ReactRouterSvg'
import ReactSvg from '@/features/svg/ReactSvg'
import ReduxSvg from '@/features/svg/ReduxSvg'
import SassSvg from '@/features/svg/SassSvg'
import SocketIOSvg from '@/features/svg/SocketIOSvg'
import TailwindSvg from '@/features/svg/TailwindSvg'
import TsSvg from '@/features/svg/TsSvg'
import WebpackSvg from '@/features/svg/WebpackSvg'
import XmlSvg from '@/features/svg/XmlSvg'

const skillsSvg = [
  [<TsSvg />, 'TypeScript', 'tooltipTypeScript'],
  [<JsSvg />, 'JavaScript', 'tooltipJavaScript'],
  [<ReactSvg />, 'React', 'tooltipReact'],
  [<ReactRouterSvg />, 'React Router', 'tooltipReactRouter'],
  [<WebpackSvg />, 'Webpack', 'tooltipWebpack'],
  [<ElectronSvg />, 'Electron', 'tooltipElectron'],
  [<NodejsSvg />, 'Node.JS', 'tooltipNodeJS'],
  [<TailwindSvg />, 'TailwindCSS', 'tooltipTailwind'],
  [<SassSvg />, 'Sass', 'tooltipSass'],
  [<ReduxSvg />, 'Redux', 'tooltipRedux'],
  [<HtmlSvg />, 'HTML', 'tooltipHTML'],
  [<CssSvg />, 'CSS', 'tooltipCSS'],
  [<SocketIOSvg />, 'Socket.IO', 'tooltipSocketIO'],
  [<PythonSvg />, 'Python', 'tooltipPython'],
  [<KotlinSvg />, 'Kotlin', 'tooltipKotlin'],
  [<FigmaSvg />, 'Figma', 'tooltipFigma'],
  [<OtherSvg />, 'Others', 'tooltipOther'],
  [<AndroidStudioSvg />, 'Android Studio'],
  [<XmlSvg />, 'XML'],
] as const

export default skillsSvg
