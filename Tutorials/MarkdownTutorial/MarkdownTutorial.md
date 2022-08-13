# Markdown Tutorial
## **Italics and Bold**

Surround words with underscore to make italic
* _word_
* _multiple words_

Surround words with two asterisks (**) to make bold

**word**  
**multiple words**

To apply bold and italic to the same words:
* **_word_**
* **_multiple words_**
***
## **Headers**
To apply header formatting to text, place a number of hash marks that match the size intended
# Header one
## Header two
### Header three
#### Header four
[Regular text]
##### Header five
###### Header six
***
## **Links**
Two types of links:
1. Inline Link: wrap link text in brackets ( [ ] ) and wrap the link in parenthesis ( ( ) )

[Visit GitHub!](www.github.com)
[**Visit Github!**](www.github.com)

2. Reference Link: link to another place in the document

Here's [a link to something else][another place].
Here's [yet another link][another-link].
And now back to [the first link][another place].

[another place]: www.github.com
[another-link]: www.google.com
***
## **Images**
Almost the same as Links, two types of image styles:
1. Inline Image Link: enter an exclamation point ( ! ), wrap the alt text in brackets ( [ ] ), then wrap the link in parenthesis ( ( ) )

2. Reference Image Link: start with an exclamation point ( ! ), provide two brackets for alt text and then two more for the image tag

![Image Alt Text: Tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)
***
## **Blockquotes**
A way to format text so it stands out to the reader. This is done using the greater than caret ( > ):
> "Becoming me was the greatest creative project of my life" - Eliot Waugh, _The Magicians_

The caret character can also be places on each line of the quote, this is useful if quote is multiple paragraphs:

> V: But on this most auspicious of nights, permit me then, in lieu of the more commonplace sobriquet, to suggest the character of this dramatis persona.
>
>V: Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition.
>
>[carves "V" into poster on wall]
>
>V: The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous.
>
>V: [giggles]
>
>V: Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it's my very good honor to meet you and you may call me V.
***
## **Lists**
Two types of lists:

Unordered:
* Bullet Points
    * Varies by indent
        * Here's another example
            * Any more indents, square repeats
                
                 Instead, add additional information formatted underneath needed bullet points to expand. This is done by [enter, tab, space]
* Done by using an asterisk and leading tabs if needed

Ordered:
1. Numbers
2. Done by enter a number and following decimal
3. Here's another example
***
## **Paragraphs**
Hard break: Lines separated by two returns

Line One

Line Two

Line Three

Soft break: Lines separated by two spaces and return

Line One  
Line Two  
Line Three  
***
##### Located: https://daringfireball.net/projects/markdown/syntax#header
# Markdown: Syntax
* Markdown is used  for formatting writing for the web
* It's not meant to replace HTML:

     HTML is a _publishing_ format  
    Markdown is a _writing_ format

* For any markup not covered by Markdown's syntax, use HTML
    * This is done by utilizing HTML tags