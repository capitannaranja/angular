import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

	private title: string = "All recipes";
	private recipes: Array<Recipe> = [
    new Recipe("Maultaschen", "Kobi", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/maultaschen.jpeg?raw=true", "Ob mit Zwiebeln geschmelzt, in Brühe gekocht oder mit Ei geröstet - die schwäbische Spezialität ist so lecker, dass sie heute in vielerlei Kombinationen auf dem Speiseplan steht. Der Klassiker besteht unter anderem aus Spinat, Tatar, Zwiebeln und Kräutern, aber auch vegetarische Varianten oder Leckereien wie Lachsmaultaschen sind beliebt."),
    new Recipe("Schwäbischer Kartoffelsalat", "Tobias", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/kartoffelsalat.jpeg?raw=true", "Traditionell mit Maultaschen, als Beilage zu Saitenwürstle, zum Grillen oder einfach im gemischten Salat - der schwäbische Kartoffelsalat passt zu fast allem und schmeckt einfach gut! Hauptsache, er ist schön schmotzig."),
    new Recipe("Linsen und Spätzle", "Marco", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/linsen-und-spaetzle.jpeg?raw=true", "Linsen und Spätzle - das Traditionsgericht der schwäbischen Küche. Mit Saitenwürsten ein absoluter Klassiker. Nicht vergessen: Essig und Senf zum Abschmecken am Tisch bereitstellen!"),
    new Recipe("Apfelküchle", "Marco", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/apfelkuechle.jpeg?raw=true", "Lust auf Süßes? Die schwäbischen Apfelküchle eignen sich als leckeres Dessert oder süße Mahlzeit und schmecken besonders gut mit Vanilleeis oder -soße."),
    new Recipe("Kirschmichl", "Steffen", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/ofenschlupfer.jpeg?raw=true", "Am besten warm genießen: Der Ofenschlupfer ist Dessertgenuß mit langer Tradition. Die schwäbische Süßspeise zergeht auf der Zunge. Lecker mit Vanillesoße!"),
    new Recipe("Kässpätzle", "Christof", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/kaesspaetzle.jpeg?raw=true", "Herzhafte Hausmannskost vom Feinsten. Leckere Spätzle nach schwäbischem Rezept, kombiniert mit Käse und Röstzwiebeln - unbedingt probieren!"),
    new Recipe("Zwiebelrostbraten", "Steffen", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/zwiebelrostbraten.jpeg?raw=true", "Zart-mürbes Fleisch, geröstete Zwiebeln, eine delikate Soße: Ein guter Zwiebelrostbraten ist unwiderstehlich!"),
    new Recipe("Gaisburger Marsch", "Christof", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/gaisburger-marsch.jpeg?raw=true", "Gaisburger Marsch, Verheierte, Kartoffelschnitz und Spätzle oder Böckinger Feldgeschrei ist ein traditionelles schwäbisches Eintopfgericht."),
    new Recipe("Zwiebelkuchen", "Tobias", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/zwiebelkuchen.jpeg?raw=true", "Der deftige Zwiebelkuchen wird meistens im Herbst gegessen - und schmeckt besonders lecker zu neuem Wein! Probieren Sie selbst. Und wenn Sie Zwiebelkuchen mögen: Besuchen Sie einmal das Zwiebelfest in Esslingen am Neckar!"),
    new Recipe("Süddeutsches Laugengebäck", "Kobi", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/brezel.jpeg?raw=true", "Die Brezel ist traditioneller Snack in Schwaben und wird zu jeder Tageszeit gerne gegessen: ganz einfach pur, mit Butter, lecker belegt oder als Beilage. Das salzige Laugengebäck bekommen Sie bei jedem Bäcker. Besonders lecker sind die Brezeln frisch aus dem Ofen!"),
  ];

  	constructor() { }

	ngOnInit() {
	}

}
