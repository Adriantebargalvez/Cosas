namespace WindowsFormsApp1
{
    partial class Nominas
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblempleado = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.txtBoxSalarioBase = new System.Windows.Forms.TextBox();
            this.txtBoxPrestaciones = new System.Windows.Forms.TextBox();
            this.txtBoxNomina = new System.Windows.Forms.TextBox();
            this.txtBoxSalarioTotal = new System.Windows.Forms.TextBox();
            this.gBoxNomina = new System.Windows.Forms.GroupBox();
            this.CBoxEmpleado = new System.Windows.Forms.ComboBox();
            this.gBoxNomina.SuspendLayout();
            this.SuspendLayout();
            // 
            // lblempleado
            // 
            this.lblempleado.AutoSize = true;
            this.lblempleado.Font = new System.Drawing.Font("Calibri", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblempleado.Location = new System.Drawing.Point(18, 38);
            this.lblempleado.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblempleado.Name = "lblempleado";
            this.lblempleado.Size = new System.Drawing.Size(141, 17);
            this.lblempleado.TabIndex = 0;
            this.lblempleado.Text = "Seleccionar empleado:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(26, 26);
            this.label2.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(83, 17);
            this.label2.TabIndex = 1;
            this.label2.Text = "Salario base:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(26, 62);
            this.label3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(87, 17);
            this.label3.TabIndex = 2;
            this.label3.Text = "Prestaciones:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(25, 98);
            this.label4.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(85, 17);
            this.label4.TabIndex = 3;
            this.label4.Text = "Bonificación:";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(26, 135);
            this.label5.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(83, 17);
            this.label5.TabIndex = 4;
            this.label5.Text = "Salario total:";
            // 
            // txtBoxSalarioBase
            // 
            this.txtBoxSalarioBase.Location = new System.Drawing.Point(121, 26);
            this.txtBoxSalarioBase.Margin = new System.Windows.Forms.Padding(2);
            this.txtBoxSalarioBase.Name = "txtBoxSalarioBase";
            this.txtBoxSalarioBase.Size = new System.Drawing.Size(235, 24);
            this.txtBoxSalarioBase.TabIndex = 5;
            // 
            // txtBoxPrestaciones
            // 
            this.txtBoxPrestaciones.Location = new System.Drawing.Point(121, 60);
            this.txtBoxPrestaciones.Margin = new System.Windows.Forms.Padding(2);
            this.txtBoxPrestaciones.Name = "txtBoxPrestaciones";
            this.txtBoxPrestaciones.Size = new System.Drawing.Size(235, 24);
            this.txtBoxPrestaciones.TabIndex = 6;
            // 
            // txtBoxNomina
            // 
            this.txtBoxNomina.Location = new System.Drawing.Point(121, 98);
            this.txtBoxNomina.Margin = new System.Windows.Forms.Padding(2);
            this.txtBoxNomina.Name = "txtBoxNomina";
            this.txtBoxNomina.Size = new System.Drawing.Size(235, 24);
            this.txtBoxNomina.TabIndex = 7;
            this.txtBoxNomina.TextChanged += new System.EventHandler(this.txtBoxNomina_TextChanged);
            // 
            // txtBoxSalarioTotal
            // 
            this.txtBoxSalarioTotal.Location = new System.Drawing.Point(121, 135);
            this.txtBoxSalarioTotal.Margin = new System.Windows.Forms.Padding(2);
            this.txtBoxSalarioTotal.Name = "txtBoxSalarioTotal";
            this.txtBoxSalarioTotal.Size = new System.Drawing.Size(235, 24);
            this.txtBoxSalarioTotal.TabIndex = 8;
            this.txtBoxSalarioTotal.TextChanged += new System.EventHandler(this.txtBoxSalarioTotal_TextChanged);
            // 
            // gBoxNomina
            // 
            this.gBoxNomina.Controls.Add(this.label2);
            this.gBoxNomina.Controls.Add(this.txtBoxSalarioTotal);
            this.gBoxNomina.Controls.Add(this.label3);
            this.gBoxNomina.Controls.Add(this.txtBoxNomina);
            this.gBoxNomina.Controls.Add(this.label4);
            this.gBoxNomina.Controls.Add(this.txtBoxPrestaciones);
            this.gBoxNomina.Controls.Add(this.label5);
            this.gBoxNomina.Controls.Add(this.txtBoxSalarioBase);
            this.gBoxNomina.Font = new System.Drawing.Font("Calibri", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gBoxNomina.Location = new System.Drawing.Point(33, 67);
            this.gBoxNomina.Margin = new System.Windows.Forms.Padding(2);
            this.gBoxNomina.Name = "gBoxNomina";
            this.gBoxNomina.Padding = new System.Windows.Forms.Padding(2);
            this.gBoxNomina.Size = new System.Drawing.Size(452, 192);
            this.gBoxNomina.TabIndex = 9;
            this.gBoxNomina.TabStop = false;
            this.gBoxNomina.Text = "NOMINA";
            // 
            // CBoxEmpleado
            // 
            this.CBoxEmpleado.FormattingEnabled = true;
            this.CBoxEmpleado.Location = new System.Drawing.Point(155, 38);
            this.CBoxEmpleado.Margin = new System.Windows.Forms.Padding(2);
            this.CBoxEmpleado.Name = "CBoxEmpleado";
            this.CBoxEmpleado.Size = new System.Drawing.Size(327, 21);
            this.CBoxEmpleado.TabIndex = 10;
            this.CBoxEmpleado.SelectedIndexChanged += new System.EventHandler(this.CBoxEmpleado_SelectedIndexChanged);
            // 
            // Nominas
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(533, 292);
            this.Controls.Add(this.CBoxEmpleado);
            this.Controls.Add(this.gBoxNomina);
            this.Controls.Add(this.lblempleado);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "Nominas";
            this.Text = "Nominas";
            this.gBoxNomina.ResumeLayout(false);
            this.gBoxNomina.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblempleado;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox txtBoxSalarioBase;
        private System.Windows.Forms.TextBox txtBoxPrestaciones;
        private System.Windows.Forms.TextBox txtBoxNomina;
        private System.Windows.Forms.TextBox txtBoxSalarioTotal;
        private System.Windows.Forms.GroupBox gBoxNomina;
        private System.Windows.Forms.ComboBox CBoxEmpleado;
    }
}