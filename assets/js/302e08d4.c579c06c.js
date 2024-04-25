"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3857],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),c=i,m=d["".concat(p,".").concat(c)]||d[c]||g[c]||o;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(8168),i=t(8587),o=(t(6540),t(5680)),r=["components"],l={id:"mid",title:"Mid"},p=void 0,s={unversionedId:"mid",id:"mid",title:"Mid",description:"Installation",source:"@site/../docs/mid.md",sourceDirName:".",slug:"/mid",permalink:"/tofu/docs/mid",draft:!1,tags:[],version:"current",lastUpdatedBy:"Andrey Golikov",lastUpdatedAt:1635777917,formattedLastUpdatedAt:"Nov 1, 2021",frontMatter:{id:"mid",title:"Mid"},sidebar:"docs",previous:{title:"MakeRef",permalink:"/tofu/docs/concurrent-makeref"},next:{title:"Tofu optics",permalink:"/tofu/docs/optics"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Assumption",id:"assumption",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],g={toc:d},c="wrapper";function m(e){var n=e.components,t=(0,i.A)(e,r);return(0,o.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},'"tf.tofu" %% "tofu" % tofu-version'),(0,o.yg)("br",{parentName:"p"}),"\n","or as a standalone dependency:",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},'"tf.tofu" %% "tofu-core-higher-kind" % tofu-version')," "),(0,o.yg)("h2",{id:"assumption"},"Assumption"),(0,o.yg)("p",null,"Consider some trait"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait MyBusinessModule[F[_]] {\n  def doBusinessThing(entity: Entity, info: Info): F[Value]\n  def undoBusinessThing(entity: Entity): F[Respect]\n}\n")),(0,o.yg)("p",null,"Often ",(0,o.yg)("inlineCode",{parentName:"p"},"F")," presented like some ",(0,o.yg)("inlineCode",{parentName:"p"},"IO"),", reader, or any transformer"),(0,o.yg)("p",null,"But signature doesn't oblige to be strict. Moreover, there is no necessity to use a functor"),(0,o.yg)("p",null,"Let's start with an example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"type Pre[F[_], A] = F[Unit]\n")),(0,o.yg)("p",null,"Despite ",(0,o.yg)("inlineCode",{parentName:"p"},"Pre")," has type-parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"A"),", it doesn't put any information to the result"),(0,o.yg)("p",null,"Apply ",(0,o.yg)("inlineCode",{parentName:"p"},"MyBusinessModule[F[_]]")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"Pre[F[_], *]")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait MyBusinessModule[Pre[F, *]] {\n  def doBusinessThing(entity: Entity, info: Info): F[Unit]\n  def undoBusinessThing(entity: Entity): F[Unit]\n}\n")),(0,o.yg)("p",null,"Only the effect is produced without any result. It could be logging, input validation, or something like that"),(0,o.yg)("p",null,"Now consider the following type"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"type Post[F[_], A] = A => F[Unit]\n")),(0,o.yg)("p",null,"This is a contravariant type. The module takes the form"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait MyBusinessModule[Post[F, *]] {\n  def doBusinessThing(entity: Entity, info: Info): Value => F[Unit]\n  def undoBusinessThing(entity: Entity): Respect => F[Unit]\n}\n")),(0,o.yg)("p",null,"Such an implementation of a module can express logging or validation of a computation result"),(0,o.yg)("p",null,"Completes the next type"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"type Mid[F[_], A] = F[A] => F[A]\n")),(0,o.yg)("p",null,"With ",(0,o.yg)("inlineCode",{parentName:"p"},"Monad[F]")," both ",(0,o.yg)("inlineCode",{parentName:"p"},"Pre")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Post")," can be turned into ",(0,o.yg)("inlineCode",{parentName:"p"},"Mid")),(0,o.yg)("p",null,"Applying this to the module"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait MyBusinessModule[Mid[F, *]] {\n  def doBusinessThing(entity: Entity, info: Info): F[Value] => F[Value]\n  def undoBusinessThing(entity: Entity): F[Respect] => F[Respect]\n}\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Mid")," provides capabilities of both ",(0,o.yg)("inlineCode",{parentName:"p"},"Pre")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Post"),", but also allows to run ",(0,o.yg)("inlineCode",{parentName:"p"},"F")," multiple times or not to run it at all."),(0,o.yg)("p",null,"Such middleware can be caching, retrying, or another logic, which is not implemented in infrastructure but requires additional reflection"),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("p",null,"It turns out that ",(0,o.yg)("a",{parentName:"p",href:"https://typelevel.org/cats-tagless/api/cats/tagless/ApplyK.html"},"ApplyK")," is enough. Via"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"def map2K[F[_], G[_], H[_]](af: A[F], ag: A[G])(f: Tuple2K[F, G, *]~> H]): A[H]\n")),(0,o.yg)("p",null,"It makes it possible to compose the result of the main computation and the result of a plug-in computation. Hence, we can also compose the main module implementation and pluggable one"),(0,o.yg)("p",null,"Calling ",(0,o.yg)("inlineCode",{parentName:"p"},"map2K")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"F = F, G = Mid[F, *], H = F"),", then substituting ",(0,o.yg)("inlineCode",{parentName:"p"},"MyBusinessModule[F]")," and plugin ",(0,o.yg)("inlineCode",{parentName:"p"},"MyBusinessModule[Mid]"),"\nas ",(0,o.yg)("inlineCode",{parentName:"p"},"af")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ag"),", only remains to implement ",(0,o.yg)("inlineCode",{parentName:"p"},"Tuple2K[F, G, *]~> H]")," i.e. the polymorphic function ",(0,o.yg)("inlineCode",{parentName:"p"},"[A] (F[A], F[A] => F[A]) => F[A]")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"(fa, f) => f(fa)")),(0,o.yg)("p",null,"So plugin application is just the process of applying the function to the result of every method. The macro generating ",(0,o.yg)("inlineCode",{parentName:"p"},"ApplyK[MyBusinessModule]")," will do the rest of all"),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"Example ",(0,o.yg)("inlineCode",{parentName:"p"},"representableK")," can be found in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/tofu-tf/tofu/blob/master/examples/src/main/scala/tofu/example/doobie/TofuDoobieExample.scala"},"source")),(0,o.yg)("p",null,"Example ",(0,o.yg)("inlineCode",{parentName:"p"},"applyK")," for authorship of ",(0,o.yg)("a",{parentName:"p",href:"https://t.me/ppressives"},"https://t.me/ppressives")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import cats.{Applicative, FlatMap, Monad}\nimport cats.syntax.semigroup._\nimport derevo.derive\nimport derevo.tagless.applyK\nimport tofu.higherKind.Mid\nimport tofu.syntax.monadic._\n\ntrait Metrics[F[_]] {\n  def timed[A](metricsKey: String)(f: F[A]): F[A]\n}\n\ntrait Logger[F[_]] {\n  def info(str: String): F[Unit]\n}\n\n@derive(applyK)\ntrait FooService[F[_]] {\n  def foo(a: String): F[Int]\n}\n\nobject FooService {\n  def create[F[_] : Monad](metrics: Metrics[F], logger: Logger[F]): FooService[F] = {\n    val mid = (new FooLogging(logger): FooService[Mid[F, *]]) |+| (new FooMetrics(metrics): FooService[Mid[F, *]])\n    mid attach new FooImpl[F]\n  }\n\n  private final class FooImpl[F[_]: Applicative] extends FooService[F] {\n    def foo(a: String): F[Int] = a.length.pure[F]\n  }\n\n  private final class FooLogging[F[_]: FlatMap](logger: Logger[F]) extends FooService[Mid[F, *]] {\n    def foo(a: String): Mid[F, Int] =\n      d => logger.info(s"Calling foo with a=$a") *> d.flatTap(res => logger.info(s"foo returned $res"))\n  }\n\n  private final class FooMetrics[F[_]](metrics: Metrics[F]) extends FooService[Mid[F, *]] {\n    def foo(a: String): Mid[F, Int] = metrics.timed("timings.foo")(_)\n  }\n}\n')))}m.isMDXComponent=!0}}]);