-- Natan DEAD REAILS Script com HUD e Noclip
local Player = game.Players.LocalPlayer
local Character = Player.Character or Player.CharacterAdded:Wait()

-- HUD
local ScreenGui = Instance.new("ScreenGui")
ScreenGui.Name = "NatanDeadReailsHUD"
ScreenGui.Parent = game.CoreGui

local Frame = Instance.new("Frame")
Frame.Size = UDim2.new(0, 200, 0, 120)
Frame.Position = UDim2.new(0, 20, 0, 100)
Frame.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
Frame.BorderSizePixel = 0
Frame.Parent = ScreenGui

local Title = Instance.new("TextLabel")
Title.Text = "Natan DEAD REAILS"
Title.Font = Enum.Font.GothamBold
Title.TextSize = 18
Title.TextColor3 = Color3.fromRGB(255, 255, 255)
Title.Size = UDim2.new(1, 0, 0, 30)
Title.BackgroundTransparency = 1
Title.Parent = Frame

-- Botão Noclip
local NoclipButton = Instance.new("TextButton")
NoclipButton.Text = "Ativar Noclip"
NoclipButton.Font = Enum.Font.Gotham
NoclipButton.TextSize = 14
NoclipButton.TextColor3 = Color3.fromRGB(255, 255, 255)
NoclipButton.Size = UDim2.new(1, -20, 0, 30)
NoclipButton.Position = UDim2.new(0, 10, 0, 40)
NoclipButton.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
NoclipButton.Parent = Frame

-- Noclip função
local Noclip = false
local RunService = game:GetService("RunService")

local function ToggleNoclip()
    Noclip = not Noclip
    NoclipButton.Text = Noclip and "Desativar Noclip" or "Ativar Noclip"
end

NoclipButton.MouseButton1Click:Connect(ToggleNoclip)

RunService.Stepped:Connect(function()
    if Noclip and Character then
        for _, part in pairs(Character:GetDescendants()) do
            if part:IsA("BasePart") and part.CanCollide then
                part.CanCollide = false
            end
        end
    end
end)

-- Atualiza personagem caso morra
Player.CharacterAdded:Connect(function(char)
    Character = char
end)
