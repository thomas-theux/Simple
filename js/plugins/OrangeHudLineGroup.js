/*=============================================================================
 * Orange - Line Group HUD
 * By HUDell - www.hudell.com
 * OrangeHudLineGroup.js
 * Version: 1.3
 * Free for commercial and non commercial use.
 *=============================================================================*/
/*:
 * @plugindesc Adds Several new Variables to Orange Hud
 * @author Hudell
 *
 * @param GroupName
 * @desc The name of the HUD group where this line should be displayed
 * @default main
 *
 * @param DefaultPattern
 * @desc The pattern of each line that will be drawn
 * @default %1
 *
 * @param VariableList
 * @desc The list of variables that should be displayed, separated by comma
 * @default 1
 *
 * @param SwitchId
 * @desc Set this to a switch number to use it to control the visibility of this group
 * @default 0
 *
 * @param X
 * @desc The X position of the variable line inside the HUD
 * @default
 *
 * @param Y
 * @desc The Y position of the variable line inside the HUD
 * @default
 *
 * @param FontFace
 * @desc The font face to use. Leave empty to use the HUD default
 * @default
 *
 * @param FontSize
 * @desc The font size to use. Leave empty to use the HUD default
 * @default
 *
 * @param FontColor
 * @desc The font color to use. Leave empty to use the HUD default
 * @default
 *
 * @param FontItalic
 * @desc Should use italic? Leave empty to use the HUD default
 * @default
 *
 * @param LineHeight
 * @desc The Y distance between each line on the group
 * @default 24
 *
 * @param LineWidth
 * @desc The X distance between each line on the group
 * @default 0
 *
 * @param UseScriptPattern
 * @desc If true, the pattern lines will be evaluated as scripts
 * @default false
 *
 * @param PatternLine1
 * @desc The pattern of the line 1. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine2
 * @desc The pattern of the line 2. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine3
 * @desc The pattern of the line 3. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine4
 * @desc The pattern of the line 4. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine5
 * @desc The pattern of the line 5. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine6
 * @desc The pattern of the line 6. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine7
 * @desc The pattern of the line 7. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine8
 * @desc The pattern of the line 8. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine9
 * @desc The pattern of the line 9. Leave empty to use the default pattern.
 * @default
 *
 * @param PatternLine10
 * @desc The pattern of the line 10. Leave empty to use the default pattern.
 * @default
 *
 * @param VariableXGroup
 * @desc The number of the variable that holds the X position of the line group inside the HUD
 * @default 0
 *
 * @param VariableYGroup
 * @desc The number of the variable that holds the Y position of the line group inside the HUD
 * @default 0
 *
 * @param VariableXLine1
 * @desc The number of the variable that holds the X position of the line 1 inside the HUD
 * @default 0
 *
 * @param VariableXLine2
 * @desc The number of the variable that holds the X position of the line 2 inside the HUD
 * @default 0
 *
 * @param VariableXLine3
 * @desc The number of the variable that holds the X position of the line 3 inside the HUD
 * @default 0
 *
 * @param VariableXLine4
 * @desc The number of the variable that holds the X position of the line 4 inside the HUD
 * @default 0
 *
 * @param VariableXLine5
 * @desc The number of the variable that holds the X position of the line 5 inside the HUD
 * @default 0
 *
 * @param VariableXLine6
 * @desc The number of the variable that holds the X position of the line 6 inside the HUD
 * @default 0
 *
 * @param VariableXLine7
 * @desc The number of the variable that holds the X position of the line 7 inside the HUD
 * @default 0
 *
 * @param VariableXLine8
 * @desc The number of the variable that holds the X position of the line 8 inside the HUD
 * @default 0
 *
 * @param VariableXLine9
 * @desc The number of the variable that holds the X position of the line 9 inside the HUD
 * @default 0
 *
 * @param VariableXLine10
 * @desc The number of the variable that holds the X position of the line 10 inside the HUD
 * @default 0
 *
 * @param VariableYLine1
 * @desc The number of the variable that holds the Y position of the line 1 inside the HUD
 * @default 0
 *
 * @param VariableYLine2
 * @desc The number of the variable that holds the Y position of the line 2 inside the HUD
 * @default 0
 *
 * @param VariableYLine3
 * @desc The number of the variable that holds the Y position of the line 3 inside the HUD
 * @default 0
 *
 * @param VariableYLine4
 * @desc The number of the variable that holds the Y position of the line 4 inside the HUD
 * @default 0
 *
 * @param VariableYLine5
 * @desc The number of the variable that holds the Y position of the line 5 inside the HUD
 * @default 0
 *
 * @param VariableYLine6
 * @desc The number of the variable that holds the Y position of the line 6 inside the HUD
 * @default 0
 *
 * @param VariableYLine7
 * @desc The number of the variable that holds the Y position of the line 7 inside the HUD
 * @default 0
 *
 * @param VariableYLine8
 * @desc The number of the variable that holds the Y position of the line 8 inside the HUD
 * @default 0
 *
 * @param VariableYLine9
 * @desc The number of the variable that holds the Y position of the line 9 inside the HUD
 * @default 0
 *
 * @param VariableYLine10
 * @desc The number of the variable that holds the Y position of the line 10 inside the HUD
 * @default 0
 *
 * @help
 * ============================================================================
 * My Blog:
 * ============================================================================
 * http://hudell.com
 * */

var Imported = Imported || {};

if (Imported["OrangeHud"] === undefined) {
  throw new Error("Please add OrangeHud before OrangeHudLineGroup!");
}

var OrangeHudLineGroup = OrangeHudLineGroup || {};

if (Imported["OrangeHudLineGroup"] === undefined) {
  OrangeHudLineGroup.validateParams = function(line) {
    line.GroupName = line.GroupName || "main";

    if (line.DefaultPattern === undefined) {
      line.DefaultPattern = "%1";
    } else if (line.DefaultPattern.trim() === "") {
      line.DefaultPattern = "";
    }

    if (line.UseScriptPattern === undefined || line.UseScriptPattern !== 'true') {
      line.UseScriptPattern = false;
    } else {
      line.UseScriptPattern = true;
    }

    line.VariableList = line.VariableList.split(',');
    if (line.FontFace === undefined || line.FontFace.trim() === "") {
      line.FontFace = OrangeHud.Param.DefaultFontFace;
    }

    if (line.FontColor === undefined || line.FontColor.trim() === "") {
      line.FontColor = OrangeHud.Param.DefaultFontColor;
    }

    line.FontSize = Number(line.FontSize || OrangeHud.Param.DefaultFontSize);
    line.VariableXGroup = Number(line.VariableXGroup || 0);
    line.VariableYGroup = Number(line.VariableYGroup || 0);
    line.LineHeight = Number(line.LineHeight || line.FontSize + 4);
    line.LineWidth = Number(line.LineWidth || 0);
    line.X = Number(line.X || 0);
    line.Y = Number(line.Y || 0);

    if (line.FontItalic === undefined || (typeof line.FontItalic == "string" && line.FontItalic.trim() === "")) {
      line.FontItalic = OrangeHud.Param.DefaultFontItalic;
    } else {
      line.FontItalic = line.FontItalic == "true";
    }

    line.SwitchId = Number(line.SwitchId || 0);
  };

  OrangeHudLineGroup.drawLine = function(window, variableData) {
    if (variableData.SwitchId > 0) {
      if (!$gameSwitches.value(variableData.SwitchId)) {
        return;
      }
    }

    var defaultPattern = variableData.DefaultPattern;
    var x = OrangeHudLineGroup.realX(variableData);
    var y = OrangeHudLineGroup.realY(variableData);

    window.contents.fontFace = variableData.FontFace;
    window.contents.fontSize = variableData.FontSize;
    window.contents.fontItalic = variableData.FontItalic;
    window.changeTextColor(variableData.FontColor);

    for (var i = 0; i < variableData.VariableList.length; i++) {
      var lineNumber = (i + 1) % 10;
      if (lineNumber === 0) lineNumber = 10;

      var pattern = variableData['PatternLine' + lineNumber];
      if (pattern === undefined || pattern === "") {
        pattern = defaultPattern;
      }

      if (variableData.UseScriptPattern) {
        pattern = Function("return " + pattern)(); // jshint ignore:line
      }

      var variableId = parseInt(variableData.VariableList[i], 10);
      if (variableId > 0) {
        var line = pattern.format($gameVariables.value(variableId));


        var customX = variableData['VariableXLine' + lineNumber];
        if (customX === undefined || customX === "") {
          customX = x;
        } else {
          customX = Number(customX);
          if (isNaN(customX) || customX === 0) {
            customX = x;
          } else {
            customX = $gameVariables.value(customX);
          }
        }

        var customY = variableData['VariableYLine' + lineNumber];
        if (customY === undefined || customY === "") {
          customY = y;
        } else {
          customY = Number(customY);
          if (isNaN(customY) || customY === 0) {
            customY = y;
          } else {
            customY = $gameVariables.value(customY);
          }
        }

        window.drawTextEx(line, customX, customY);

        y += variableData.LineHeight;
        x += variableData.LineWidth;
      }
    }

    window.resetFontSettings();
  };

  OrangeHudLineGroup.getValue = function(variableData) {
    var values = [];

    for (var i = 0; i < variableData.VariableList.length; i++) {
      var variableId = parseInt(variableData.VariableList[i], 10);
      if (variableId > 0) {
        values.push($gameVariables.value(variableId));
      } else {
        values.push(0);
      }
    }

    return values.join(',');
  };

  OrangeHudLineGroup.realX = function(variableData) {
    var x = variableData.X;

    if (variableData.VariableXGroup > 0) {
      x = $gameVariables.value(variableData.VariableXGroup);
    }

    return x;
  };

  OrangeHudLineGroup.realY = function(variableData) {
    var y = variableData.Y;

    if (variableData.VariableYGroup > 0) {
      y = $gameVariables.value(variableData.VariableYGroup);
    }

    return y;
  };


  OrangeHudLineGroup.getKey = function(variableData) {
    return variableData.VariableList.join(',');
  };

  OrangeHud.registerLineType('OrangeHudLineGroup', OrangeHudLineGroup);
  Imported["OrangeHudLineGroup"] = 1.3;
}
