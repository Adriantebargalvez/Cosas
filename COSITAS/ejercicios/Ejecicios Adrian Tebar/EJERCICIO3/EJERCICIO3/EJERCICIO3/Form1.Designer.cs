namespace EJERCICIO3
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.checkedListBox1 = new System.Windows.Forms.CheckedListBox();
            this.button1 = new System.Windows.Forms.Button();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.pequeña = new System.Windows.Forms.RadioButton();
            this.familiar = new System.Windows.Forms.RadioButton();
            this.mediana = new System.Windows.Forms.RadioButton();
            this.SuspendLayout();
            // 
            // checkedListBox1
            // 
            this.checkedListBox1.FormattingEnabled = true;
            this.checkedListBox1.Items.AddRange(new object[] {
            "BACHON",
            "ANCHOAS",
            "CEBOLLA",
            "PIMIENTO"});
            this.checkedListBox1.Location = new System.Drawing.Point(113, 70);
            this.checkedListBox1.Name = "checkedListBox1";
            this.checkedListBox1.Size = new System.Drawing.Size(188, 142);
            this.checkedListBox1.TabIndex = 0;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(284, 236);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(103, 32);
            this.button1.TabIndex = 2;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(180, 340);
            this.textBox1.Multiline = true;
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(365, 59);
            this.textBox1.TabIndex = 3;
            // 
            // pequeña
            // 
            this.pequeña.AutoSize = true;
            this.pequeña.Location = new System.Drawing.Point(352, 70);
            this.pequeña.Name = "pequeña";
            this.pequeña.Size = new System.Drawing.Size(98, 24);
            this.pequeña.TabIndex = 4;
            this.pequeña.TabStop = true;
            this.pequeña.Text = "Pequeña";
            this.pequeña.UseVisualStyleBackColor = true;
            this.pequeña.CheckedChanged += new System.EventHandler(this.radioButton1_CheckedChanged);
            // 
            // familiar
            // 
            this.familiar.AutoSize = true;
            this.familiar.Location = new System.Drawing.Point(352, 176);
            this.familiar.Name = "familiar";
            this.familiar.Size = new System.Drawing.Size(84, 24);
            this.familiar.TabIndex = 5;
            this.familiar.TabStop = true;
            this.familiar.Text = "familiar";
            this.familiar.UseVisualStyleBackColor = true;
            // 
            // mediana
            // 
            this.mediana.AutoSize = true;
            this.mediana.Location = new System.Drawing.Point(352, 127);
            this.mediana.Name = "mediana";
            this.mediana.Size = new System.Drawing.Size(95, 24);
            this.mediana.TabIndex = 6;
            this.mediana.TabStop = true;
            this.mediana.Text = "mediana";
            this.mediana.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.mediana);
            this.Controls.Add(this.familiar);
            this.Controls.Add(this.pequeña);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.checkedListBox1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.CheckedListBox checkedListBox1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.RadioButton pequeña;
        private System.Windows.Forms.RadioButton familiar;
        private System.Windows.Forms.RadioButton mediana;
    }
}

