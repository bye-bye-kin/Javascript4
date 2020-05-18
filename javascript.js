//オブジェクトの「値」の部分には、関数を用いることもできます。
//その関数を呼び出すには、「定数名.プロパティ名()」とします。プロパティ名の後ろの()を忘れないようにしましょう。
const animal={
    name:"レオ",
    age:3,
    greet:() => {
      console.log("こんにちは");
    }
  }
  // animalのnameプロパティの値を出力してください
  console.log(animal.name);
  // animalのgreetプロパティの関数を実行してください
  animal.greet();


//オブジェクトを量産する。
//「class クラス名」とすることで新しくクラスを用意できます。なお、クラス名は基本的に大文字から始めるようにしましょう。
//クラスからオブジェクトを生成するには「new クラス名()」とする。
//クラスから生成したオブジェクトはインスタンスと呼びAnimalクラスのインスタンスをAnimalインスタンスと呼びます。
class Animal {
}
// Animalクラスのインスタンスを定数animalに代入してください
const animal=new Animal();
// 定数animalの値を出力してください
console.log(animal);

//クラスに実行したい処理や設定を追加します。
//クラスの中括弧 { } 内に「constructor() { }」と記述します。
class Animal {
    constructor(){
      console.log("インスタンスを生成しました");
    }
  }
  const animal = new Animal();
  
//コンストラクタの中で、「this.プロパティ = 値」とすることで、
//生成されたインスタンスにプロパティと値を追加することができます。
//インスタンスとはオブジェクトなので「インスタンス.プロパティ」とすることでクラスの外で使用できます。
class Animal {
  constructor() {
    this.name="レオ";
    this.age= 3;
  }
}
const animal = new Animal();
// 「名前: 〇〇」となるように出力してください
console.log(`名前：${animal.name}`);
// 「年齢: 〇〇」となるように出力してください
console.log(`年齢:${animal.age}`);


//次に、名前と年齢をインスタンスごとに自由に変えていく
//「constructor」の後の括弧「( )」内に引数名を記述することで、その引数をコンストラクタの処理内で使用できます。
class Animal {
  constructor(name,age) {   // ←ここ。
    this.name = name;
    this.age =age;

    greet(){
      console.log("こんにちは");　　//←メソッド。constructerの中に書く
  }
  info(){
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);            //←メソッド内でインスタンスの値を使用する
  }
}
// 引数に「"モカ"」と「8」を渡してください
const animal = new Animal("モカ",8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
animal.greet(); 　　　//←greetメソッドの呼び出し
animal.info();　　　　//inforメソッドの呼び出し


//メソッド
//インスタンスの「動作」のようなものです。「名前」や「年齢」などの情報はプロパティで追加したのに対して、
//メソッドは「挨拶をする」「値を計算する」などの処理のまとまりを表します。
//「インスタンス.メソッド名()」とすることでそのメソッドを呼び出し、処理を実行することができます。
//メソッド内でインスタンスの値を使用するには、「this」という特殊な値を用いて、「this.プロパティ名」とします。

//メソッド内で他のメソッドを呼び出すことも可能です。
//以下の図のように、メソッド内で「this.メソッド名()」とすることで、同じクラスの他のメソッドを使うことができます。
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    // greetメソッドを呼び出してください
    this.greet();
    
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
const animal = new Animal("レオ", 3);
animal.info();

//「継承」
//すでにあるクラスをもとに、新しくクラスを作成する方法のことです。
//「Animalクラス」を継承して「Dogクラス」を作成するには、「class Dog extends Animal」と書きます。
class Dog extends Animal {
}
// 定数dogにDogクラスのインスタンスを代入してください
const dog= new Dog("レオ",4);
// dogに対してinfoメソッドを呼び出してください
dog.info();


//メソッド内で戻り値を使う。
class Dog extends Animal {
  // getHumanAgeメソッドを追加してください
  getHumanAge(){
    return this.age*7;
    
  }
}
const dog = new Dog("レオ", 4);
dog.info();
// 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入してください
const humanAge=dog.getHumanAge();
// 「人間年齢で〇〇歳です」と出力してください
console.log(`人間年齢で${humanAge}歳です`);　　　　//←2単語続くのでAgeになってる

//親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用されます。
//これは、子クラスのメソッドが親クラスのメソッドを上書きしていることから、オーバーライドと呼ばれます。
//メソッドと同じように、コンストラクタもオーバーライドすることができます。
//ただしオーバーライドする際は1行目に「super()」と記述する必要があります。



